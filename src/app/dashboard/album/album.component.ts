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
  pageSize = 6;
  albumList: Album[] = new Array<Album>();
  constructor(private http: AlbumService) { }

  ngOnInit() {
    this.http.getAlbumListByUser({pageNumber:this.pageNumber,pageSize:this.pageSize}).subscribe((data) => {
      this.albumList = COMMON.getBody(data).content;
    });
  }

}
