import { COMMON } from './../common';
const REQUEST_URL = {
  login: COMMON.API_URL + '/user/login',
  userMusic: COMMON.API_REST + '/music/user',
  userVideo: COMMON.API_REST + '/video/user',
  userAlbum: COMMON.API_REST + '/album/user',
};

export { REQUEST_URL, COMMON }
