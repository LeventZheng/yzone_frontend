import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LightboxModule } from './../shared/theme/component/lightbox/lightbox';
import { GalleriaModule } from './../shared/theme/component/galleria/galleria';
import { PaginatorModule } from './../shared/theme/component/paginator/paginator';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './dashboard.routes';
import { ImgManageComponent } from './material/img-manage/img-manage.component';
import { MusicManageComponent } from './material/music-manage/music-manage.component';
import { VideoManageComponent } from './material/video-manage/video-manage.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        LightboxModule,
        PaginatorModule,
        GalleriaModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS, ImgManageComponent, MusicManageComponent, VideoManageComponent, AlbumComponent ]
})

export class DashboardModule {}
