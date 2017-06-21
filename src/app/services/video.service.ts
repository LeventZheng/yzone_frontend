import { Injectable } from '@angular/core';

import { HttpService, COMMON, REQUEST_URL } from './http.service';

@Injectable()
export class VideoService {

    constructor(
        private http: HttpService
    ) { }

    getVideoListByUser(params) {
        return this.http.get(REQUEST_URL.userVideo, params);
    }
}
export { COMMON }

