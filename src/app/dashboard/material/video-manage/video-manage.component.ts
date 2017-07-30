import { Component, OnInit } from '@angular/core';

import { Video } from './../../../models/video';
import { VideoService, COMMON } from './../../../services/video.service';

@Component({
  selector: 'video-manage',
  templateUrl: './video-manage.component.html',
  styleUrls: ['./video-manage.component.scss'],
  providers: [VideoService]
})
export class VideoManageComponent implements OnInit {

  pageNumber = 0;
  pageSize = 6;
  totalElements: number;
  videoList: Video[] = new Array<Video>();
  constructor(private http: VideoService) { }

  ngOnInit() {
    this.getVideoListByUser();
  }

  getVideoListByUser() {
    this.http.getVideoListByUser({pageNumber:this.pageNumber,pageSize:this.pageSize}).subscribe((data) => {
      this.videoList = data.content;
      this.totalElements = data.totalElements;
    });
  }

  paginate(e) {
    this.pageNumber = e.page;
    this.getVideoListByUser();
  }

}
