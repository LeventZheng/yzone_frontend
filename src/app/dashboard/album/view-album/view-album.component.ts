import { AlbumService } from './../../../services/album.servicce';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Album } from './../../../models/album';
import { Photo } from './../../../models/photo';

declare var Viewer: any;
declare var $: any;
@Component({
  selector: 'yzone-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss'],
  providers: [AlbumService]
})
export class ViewAlbumComponent implements OnInit {

  id: number;
  viewer: any;

 album: Album;
 photoList: Photo[];
 audioUrl:String;
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

  initPage() {
    $('.sidebar').css({display: 'none'});
    $('.navbar').css({display: 'none'});
    $('footer').css({display: 'none'});
    $('.main-panel').css({width: '100%'});
  }
  // 切换全屏状态
  toggleScreen() {
    if (this._fullscreenElement()) {
      this._exitFullscreen();
    } else {
      this._launchFullscreen();
    }
  }
  // 判断是否全屏
  _fullscreenElement() {
    return window.document.fullscreenElement  || window.document.webkitFullscreenElement || false;
  }
  // 全屏
  _launchFullscreen() {
    const element = (document.querySelector("#view_album") as any);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
  // 退出全屏
  _exitFullscreen() {
    if (document.exitFullscreen) {
      window.document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (window.document as any).mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      window.document.webkitExitFullscreen();
    }
  }

  getAlbumById() {
    this.albumService.getAlbumById({albumId: this.id}).subscribe((data) => {
      this.album = data;
      this.photoList = this.album.photoList;
      this.audioUrl = this.album.music.fileUrl;
    });
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
          (document.getElementById('video') as HTMLVideoElement).play();
      },
      hide: function (e) {
          console.log(e.type);
      },
      hidden: function (e) {
          console.log(e.type);
          _self.photoList = _self.album.photoList;
          (document.getElementById('video') as HTMLVideoElement).pause();
          (document.getElementById('video') as HTMLVideoElement).currentTime = 0;
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
    this._launchFullscreen();
    const viewerOption = this.initViewer();
    this.viewer = new Viewer(document.getElementById('images'), viewerOption);
  }

}
