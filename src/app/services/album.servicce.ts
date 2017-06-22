import { Injectable } from '@angular/core';

import { HttpService, COMMON, REQUEST_URL } from './http.service';

@Injectable()
export class AlbumService {

    constructor(
        private http: HttpService
    ) { }

    getAlbumListByUser(params) {
        return this.http.get(REQUEST_URL.userAlbum, params);
    }
}
export { COMMON }

