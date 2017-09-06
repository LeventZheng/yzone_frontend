import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Album } from './../../../models/album';

declare var Viewer: any;

@Component({
  selector: 'yzone-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit, OnChanges {

  viewer: any;

  @Input() album: Album;
  constructor() { }

  ngOnInit() {
    this.initViewer();
  }
  ngOnChanges(value) {
    console.log(value);
  }

  initViewer() {
    let _self = this;
    let viewBox = document.getElementById('viewer');
    let viewerContainer;
    let options = {
        // navbar: 1,
        // title: 1,
        // fullscreen: true,
        // transition: true,
        // keyboard: true,
        ready: function (e) {
          console.log('ready');
          
            // viewerContainer = document.getElementsByClassName('viewer-container')[0];
            // viewerContainer.style.position = 'absolute';
            // viewerContainer.style.backgroundColor = '#f3f3f3';
            // viewBox.appendChild(viewerContainer);
        },
        show: function (e) {
          console.log('show');
            viewBox.style.display = 'block';
        },
        shown: function (e) {
            console.log(e.type);
        },
        hide: function (e) {
            console.log(e.type);
        },
        hidden: function (e) {
            console.log(e.type);
        },
        view: function (e) {
            console.log(e.type, e.detail.index);
        },
        viewed: function (e) {
            console.log(e.type, e.detail.index);
            // this.viewer.zoomTo(1).rotateTo(180);
            // _self.viewer.zoomTo(0.38, true);
            // _self.viewer.moveTo(60, 0);
        }
    };
    _self.viewer = new Viewer(document.getElementById('images'), options);
    console.log(_self.viewer);
}

}
