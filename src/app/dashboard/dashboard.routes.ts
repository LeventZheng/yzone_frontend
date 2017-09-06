import { ViewAlbumComponent } from './album/view-album/view-album.component';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AlbumComponent } from './album/album.component';
import { VideoManageComponent } from './material/video-manage/video-manage.component';
import { MusicManageComponent } from './material/music-manage/music-manage.component';
import { ImgManageComponent } from './material/img-manage/img-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { AddUserComponent } from './user-manage/add-user/add-user.component';

export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },

    { path: 'material/img', component: ImgManageComponent },
    { path: 'material/music', component: MusicManageComponent },
    { path: 'material/video', component: VideoManageComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'userManage', component: UserManageComponent },
    { path: 'userManage/user/:id', component: AlbumComponent}
]

export const MODULE_COMPONENTS = [
    HomeComponent,

    ImgManageComponent,
    MusicManageComponent,
    VideoManageComponent,
    AlbumComponent,
    ViewAlbumComponent,
    UserManageComponent,
    AddUserComponent
]
