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

  musicList: Music[] = new Array<Music>();
  constructor(
    private http: MusicService
  ) { }

  ngOnInit() {
    this.http.getMusicListByUser().subscribe((data) => {
      this.musicList = COMMON.getBody(data);
    });
  }
}
