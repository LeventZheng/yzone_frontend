import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

import { COMMON, REQUEST_URL } from './../services/api';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }
    
    getToken(): string {
        return localStorage['Authorization'];
    }

    postWithoutToken(url, params = {}) {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers });
        return this.http.post(url, JSON.stringify(params), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(url, params = {}, contentType = 'application/json') {
        const headers = new Headers({ 'Content-Type': contentType, 'Authorization': this.getToken() });
        const options = new RequestOptions({ headers });
        return this.http.post(url, JSON.stringify(params), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    get(url, params = {}, contentType = 'application/json') {
        const headers = new Headers({ 'Content-Type': contentType, 'Authorization': this.getToken() });
        const options = new RequestOptions({ headers });
        const queryString = this.handleGetParams(params)
        url = url + queryString;
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);;
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

    handleFormParams(params): string {
        let queryString = '';
        for (let i in params) {
            if (params[i] != null) {
                queryString += '&' + i + '=' + params[i];
            }
        }
        return queryString;
    }

    // 处理接口回调
    private extractData(res: Response) {
        let body = res.json();
        if (body.code === 200) {
            return (body.data === false) ? false : (body.data || true);
        }
        else if (body.code === 403) {
            // location.href = this.getLoginUrl();
        } else {
            // COMMON.toast(body.desc, false); //弹框样式,首页内置
            return false;
        }
        
        // return res.json()._body;
    }
    // 处理回调异常
    handleError(error: Response | any) {
        if (error.status && error.status === 403) {
            if (localStorage['login_url']) {
                location.href = localStorage['login_url'];
            }
        }
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}

export { REQUEST_URL, COMMON }
