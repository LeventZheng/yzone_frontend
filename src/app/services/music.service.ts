import { Music } from './../models/music';
import { Injectable } from '@angular/core';

import { HttpService, COMMON, REQUEST_URL } from './http.service';

@Injectable()
export class MusicService {

    constructor(
        private http: HttpService
    ) { }

    getMusicListByUser() {
        return this.http.post(REQUEST_URL.userMusic);
    }

    save(music: Music) {
        return this.http.post(REQUEST_URL.saveMusic, music);
    }
}
export { COMMON }

