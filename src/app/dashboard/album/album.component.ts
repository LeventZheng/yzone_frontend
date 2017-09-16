import { Location } from '@angular/common';
import { PhotoService } from './../../services/photo.service';
import { Photo } from './../../models/photo';
import { ActivatedRoute, Params } from '@angular/router';
import { Album } from './../../models/album';
import { AlbumService, COMMON } from './../../services/album.servicce';
import { Component, OnInit } from '@angular/core';

declare var Viewer: any;
declare var $: any;

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumService, PhotoService]
})
export class AlbumComponent implements OnInit {

  userId: number;
  y:number;
  musicUrl:String;
  pageNumber = 0;
  pageSize = 5;
  totalElements: number;
  albumList: Album[] = new Array<Album>();
  selectedAlbum: Album;
  playAlbum = false;

  viewer: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private photoService: PhotoService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.userId = +params['id'];
      this.getAlbumListByUser();
    });
    // this.initPage();
  }

  // 收起边栏
  initPage() {
    if ($('body').hasClass('sidebar-mini')) {} else {
      $('body').addClass('sidebar-mini');
    }
  }

   getAlbumListByUser() {
    this.albumService.getAlbumListByUser({pageNumber:this.pageNumber,pageSize:this.pageSize, userId: this.userId})
    .subscribe((data) => {
      this.albumList = data.content;
      this.totalElements = data.totalElements;
    });
  } 

  paginate(e) {
    this.pageNumber = e.page;
    this.getAlbumListByUser();
  }

  /* editPic(album: Album) {
    album.editable = !album.editable;
    if (album.editable) {
      album.photoList.forEach((photo) => {
        photo.editable = true;
      });
    } else {
      album.photoList.forEach((photo) => {
        photo.editable = false;
      });
    }
  } */


  /* removePhoto(photoList: Photo[], photo: Photo) {
    console.log(photo);
    this.photoService.deleteById(photo.photoId).subscribe((data) => {
      if (data === true) {
        // 删除成功
        photoList.filter((item) => {
          return item.photoId != photo.photoId;
        })
      }
    });;
  } */

  addAlbumFromXiumei() {
    if (!this.y) {return;}
    this.albumService.addAlbumFromXiumei({userId: this.userId, y:this.y, musicUrl: this.musicUrl})
    .subscribe((data) => {
      console.log(data);
      this.albumList.unshift(data);
    });
  }

  goViewAlbum(id: number) {
    const url = 'http://' + location.host + this.location.prepareExternalUrl('album/' + id);
    // const url = 'http://' + location.host + '/#/album/' + id;
    window.open(url);
  }

  initViewer(id: number) {
    let _self = this;
    let viewerContainer;
    let options = {
      zIndex: 1030,
      interval: 2000,
      navbar: 1,
      title: 1,
      fullscreen: true,
      transition: true,
      keyboard: true,
      ready: function (e) {
        console.log('ready');
          // $('.viewer-container').css({top: document.getElementById('images_' + id).offsetTop + 'px', bottom: document.getElementById('images_' + id).offsetTop*(-1) + 'px'});
          // document.body.style.overflowY = 'hidden';
      },
      show: function (e) {
        console.log('show');
      },
      shown: function (e) {
          console.log(e.type);
      },
      hide: function (e) {
          console.log(e.type);
      },
      hidden: function (e) {
          console.log(e.type);
          document.body.style.overflowY = '';
      },
      view: function (e) {
          console.log(e.type, e.detail.index);
          this.viewer.play();
      },
      viewed: function (e) {
          console.log(e.type, e.detail.index);
          // this.viewer.zoomTo(1).rotateTo(180);
          // _self.viewer.zoomTo(0.38, true);
          // _self.viewer.moveTo(60, 0);
      }
    };
    return options;
  }
  
  onPlayAlbum(id: number) {
    const viewerOption = this.initViewer(id);
    this.viewer = new Viewer(document.getElementById('images_' + id), viewerOption);
  }

}
