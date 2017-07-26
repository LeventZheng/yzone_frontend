import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

import { HttpService } from './services/http.service';
// import { COMMOM } from './common';
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    location: Location;

    showRegister = false;
    showLoginIn = false;
    showLockScreen = false;

    constructor(
        location: Location,
        private http: HttpService) {
        this.location = location;
    }
    ngOnInit() {
        $.getScript('../assets/js/init/initMenu.js');
        $.getScript('../assets/js/demo.js');

        // this.http.login();
    }
    public isMap() {
        // console.log(this.location);
        if (this.location.prepareExternalUrl(this.location.path()) === '#/maps/fullscreen') {
            return true;
        } else {
            return false;
        }
    }
}
