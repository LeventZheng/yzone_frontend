import { Album } from './../../models/album';
import { AlbumService, COMMON } from './../../services/album.servicce';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {

  pageNumber = 1;
  pageSize = 10;
  totalElements: number;
  albumList: Album[] = new Array<Album>();
  constructor(private http: AlbumService) { }

  ngOnInit() {
    this.getAlbumListByUser();
  }

  getAlbumListByUser() {
    this.http.getAlbumListByUser({pageNumber:this.pageNumber,pageSize:this.pageSize}).subscribe((data) => {
      this.albumList = COMMON.getBody(data).content;
      this.totalElements = COMMON.getBody(data).totalElements;
    });
  }

  paginate(e) {
    console.log(e);
    this.pageNumber = e.page+1;
    this.getAlbumListByUser();
  }

}
