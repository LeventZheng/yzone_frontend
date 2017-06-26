import { PaginatorModule } from './../shared/theme/component/paginator/paginator';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './dashboard.routes';
import { ImgManageComponent } from './material/img-manage/img-manage.component';
import { MusicManageComponent } from './material/music-manage/music-manage.component';
import { VideoManageComponent } from './material/video-manage/video-manage.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
    imports: [
        BrowserModule,
        PaginatorModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS, ImgManageComponent, MusicManageComponent, VideoManageComponent, AlbumComponent ]
})

export class DashboardModule {}
