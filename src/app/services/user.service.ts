import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { HttpService } from './http.service';
import { COMMON, REQUEST_URL } from './../services/api';

@Injectable()
export class UserService {

    constructor(
        private http: HttpService
    ) { }

    check() {
        this.http.postWithoutToken(REQUEST_URL.check)
            .subscribe((data) => {});
    }

    login(params) {
        this.http.postWithoutToken(REQUEST_URL.login, params)
            .subscribe((data) => {});
    }

    register(params) {
        return this.http.postWithoutToken(REQUEST_URL.register, params)
            .subscribe((data) => {});
    }

    getUserList() {
        return this.http.post(REQUEST_URL.userList)
        .subscribe((data) => {});
    }
}
