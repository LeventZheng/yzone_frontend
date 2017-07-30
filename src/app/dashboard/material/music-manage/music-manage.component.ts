import { MusicService, COMMON } from './../../../services/music.service';
import { Component, OnInit } from '@angular/core';
import { Music } from './../../../models/music';

@Component({
  selector: 'music-manage',
  templateUrl: './music-manage.component.html',
  styleUrls: ['./music-manage.component.scss'],
  providers: [ MusicService]
})
export class MusicManageComponent implements OnInit {
  selectedMusic: Music;
  audioObj;
  musicList: Music[] = new Array<Music>();
  pageNumber = 0;
  pageSize = 9;
  totalElements: number;
  
  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.getMusicListByUser();
  }

  getMusicListByUser() {
    this.musicService.getMusicListByUser({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    }).subscribe((data) => {
      this.musicList = data.content;
      this.totalElements = data.totalElements;
    });
  }

  paginate(e) {
    this.pageNumber = e.page;
    this.getMusicListByUser();
  }

  playAudio(music: Music) {
    if (this.selectedMusic === music) {
      if (this.audioObj.paused) {
        this.audioObj.play();
      } else {
        this.audioObj.pause();
      }
    } else {
      this.selectedMusic = music;
      if (!this.audioObj) {
        this.audioObj = document.getElementById('audio');
      }
      setTimeout(() => {
        this.audioObj.play();
      },100);
    }
  }
  save(music: Music) {
    console.log(music);
    this.musicService.save(music).subscribe((data) => {
      console.log(data);
    });
  }

}
