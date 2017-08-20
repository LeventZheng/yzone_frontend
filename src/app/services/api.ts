import { COMMON } from './../shared/common/common';
const REQUEST_URL = {
  check: COMMON.API_URL + '/user/check',
  login: COMMON.API_aURL + '/user/login',
  register: COMMON.API_aURL + '/user/register',
  userList: COMMON.API_URL + '/user/list',
  userMusic: COMMON.API_URL + '/music/getMusicByUser',
  saveMusic: COMMON.API_URL + '/music/save',
  userVideo: COMMON.API_URL + '/video/getVideoByUser',
  userAlbum: COMMON.API_URL + '/album/getAlbumByUser',
  addAlbumFromXiumei: COMMON.API_URL + '/album/addAlbumFromXiumei',
  deletePhotoById: COMMON.API_URL + '/photo/deleteById'
};

export { REQUEST_URL, COMMON }
