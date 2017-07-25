import { COMMON } from './../common';
const REQUEST_URL = {
  login: COMMON.API_URL + '/user/login',
  userMusic: COMMON.API_REST + '/music/getMusicByUser',
  saveMusic: COMMON.API_REST + '/music/save',
  userVideo: COMMON.API_REST + '/video/getVideoByUser',
  userAlbum: COMMON.API_REST + '/album/getAlbumByUser',
};

export { REQUEST_URL, COMMON }
