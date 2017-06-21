import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

import { COMMON, REQUEST_URL } from './../services/api';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    setToken(token: string): void {
        localStorage['Authorization'] = 'Bearer ' + token;
    }

    getToken(): string {
        return localStorage['Authorization'];
    }

    login() {
        const params = {email: 'admin@yzone.com', password: 'admin'};
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers });
        this.http.post(REQUEST_URL.login, JSON.stringify(params), options)
            .subscribe((data) => {
                this.setToken(COMMON.clone(data)._body);
            });
    }

    post(url, params = {}, contentType = 'application/json') {
        const headers = new Headers({ 'Content-Type': contentType, 'Authorization': this.getToken() });
        const options = new RequestOptions({ headers });
        return this.http.post(url, JSON.stringify(params), options);
    }

    get(url, params = {}, contentType = 'application/json') {
        const headers = new Headers({ 'Content-Type': contentType, 'Authorization': this.getToken() });
        const options = new RequestOptions({ headers });
        const queryString = this.handleGetParams(params)
        url = url + queryString;
        return this.http.get(url, options);
    }

     private extractData(res: Response) {
         return res.json()._body;
     }

    handleGetParams(params): string {
        let queryString = '';
        for (const i in params) {
            if (params[i] || params[i] === false || params[i] === 0) {
                queryString += '&' + i + '=' + params[i];
            }
        }
        const exp = /^&/;
        queryString = queryString.length > 0 ? queryString.replace(exp, '?') : '';
        return queryString;
    }
}

export { REQUEST_URL, COMMON }
