import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'material-icons' },

    { path: 'album', title: '相册管理', menuType: MenuType.LEFT, icon:'material-icons'},
    { path: 'material/img', title: '图片', menuType: MenuType.LEFT, icon:'material-icons'},
    { path: 'material/music', title: '音频', menuType: MenuType.LEFT, icon:'material-icons'},
    { path: 'material/video', title: '视频', menuType: MenuType.LEFT, icon:'material-icons'},


];
