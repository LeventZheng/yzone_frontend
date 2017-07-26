import { COMMON } from './../shared/common/common';
const REQUEST_URL = {
  login: COMMON.API_aURL + '/user/login',
  register: COMMON.API_aURL + '/user/register',
  userMusic: COMMON.API_URL + '/music/getMusicByUser',
  saveMusic: COMMON.API_URL + '/music/save',
  userVideo: COMMON.API_URL + '/video/getVideoByUser',
  userAlbum: COMMON.API_URL + '/album/getAlbumByUser',
};

export { REQUEST_URL, COMMON }
