import { PhotoService } from './../../services/photo.service';
import { Photo } from './../../models/photo';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Album } from './../../models/album';
import { AlbumService, COMMON } from './../../services/album.servicce';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumService, PhotoService]
})
export class AlbumComponent implements OnInit {

  userId: number;
  y:number;
  pageNumber = 0;
  pageSize = 10;
  totalElements: number;
  albumList: Album[] = new Array<Album>();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private photoService: PhotoService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.userId = +params['id'];
      this.getAlbumListByUser();
    });
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

  editPic(album: Album) {
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
  }

  removePhoto(photoList: Photo[], photo: Photo) {
    console.log(photo);
    this.photoService.deleteById(photo.photoId).subscribe((data) => {
      if (data === true) {
        // 删除成功
        photoList.filter((item) => {
          return item.photoId != photo.photoId;
        })
      }
    });;
  }

  addAlbumFromXiumei() {
    if (!this.y) {return;}
    this.albumService.addAlbumFromXiumei({userId: this.userId, y:this.y})
    .subscribe((data) => {
      console.log(data);
      this.albumList.unshift(data);
    });
  }

}
