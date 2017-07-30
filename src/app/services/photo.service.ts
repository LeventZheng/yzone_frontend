import { Injectable } from '@angular/core';

import { HttpService, REQUEST_URL } from './http.service';

@Injectable()
export class PhotoService {

    constructor(
        private httpService: HttpService
    ) { }

    deleteById(photoId: number) {
        return this.httpService.postForm(REQUEST_URL.deletePhotoById, {photoId});
    }
}
