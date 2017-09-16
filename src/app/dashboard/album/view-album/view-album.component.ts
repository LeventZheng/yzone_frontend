import { Photo } from './../../../models/photo';
import { AlbumService } from './../../../services/album.servicce';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Album } from './../../../models/album';

declare var Viewer: any;
declare var $: any;
@Component({
  selector: 'yzone-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss'],
  providers: [AlbumService]
})
export class ViewAlbumComponent implements OnInit, OnChanges, OnDestroy {

  id: number;
  viewer: any;

 album: Album;
 photoList: Photo[];
  images: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.initPage();

    this.activatedRoute.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.getAlbumById();
    });
  }
  ngOnChanges(value) {
    console.log(value);
  }

  ngOnDestroy() {
    $('.sidebar').css();
    $('.navbar').css();
    $('.main-panel').css();
  }

  getAlbumById() {
    this.albumService.getAlbumById({albumId: this.id}).subscribe((data) => {
      this.album = data;
      this.photoList = this.album.photoList;
    });
  }

  initPage() {
    $('.sidebar').css({display: 'none'});
    $('.navbar').css({display: 'none'});
    $('footer').css({display: 'none'});
    $('.main-panel').css({width: '100%'});
  }

  initViewer() {
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
      },
      show: function (e) {
        console.log('show');
      },
      shown: function (e) {
          console.log(e.type);
          _self.photoList = _self.album.photoList.slice(0,3);
      },
      hide: function (e) {
          console.log(e.type);
      },
      hidden: function (e) {
          console.log(e.type);
          _self.photoList = _self.album.photoList;
      },
      view: function (e) {
          console.log(e.type, e.detail.index);
          this.viewer.play();
      },
      viewed: function (e) {
          console.log(e.type, e.detail.index);
      }
    };
    return options;
  }

  onPlayAlbum() {
    const viewerOption = this.initViewer();
    this.viewer = new Viewer(document.getElementById('images'), viewerOption);
  }

}
