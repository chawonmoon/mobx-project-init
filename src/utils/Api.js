import axios from 'axios';
import Config from '../config/Config';
import LoadingBar from '../utils/LoadingBar';
import rootStore from '../stores/RootStore';

let API_URL = '/api/';

const Api = axios.create({
  baseURL: API_URL,
  disableLoadingBar: false
});

Api.defaults.timeout = 1000;
Api.defaults.headers.post['Content-Type'] = 'application/json';

// 요청 인터셉터
Api.interceptors.request.use(
  (config) => {
    // config에 헤더 정보를 담을때 여기서 작성한다
    // loading바 사용시 여기서 노출한다.
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
Api.interceptors.response.use(
  (response) => {
    // loading 바 사용시 여기서 숨긴다.
    return response;
  },
  (error) => {
    let requestConfig = error.config;
    if (error && error.response) {
      if (!requestConfig.disableServerErrorHandle) {
        // 항상 체크하는 서버 에러
        if (error.response.status === 400) {
          // 입력값 오류는 json 구조가 틀림
        } else if (error.response.status === 401) {
          // 네이티브가 인터셉터
        } else if (error.response.status === 404) {
          // 404 not found error
        } else if (error.response.status === 412) {
          // 412 not found error
        } else if (error.response.status === 418) {
          // 418 웹버전 낮을 경우 판올림
        } else if (error.response.status === 428) {
          // 428 에러메시지 페이지에 보여야될 경우
        } else if (error.response.status === 426) {
          // 네이티브가 인터셉터
        } else if (error.response.status === 502) {
          // 서버 점검
        } else if (error.response.status === 503) {
          // 서버 재시작
        } else if (error.response.status === 504) {
          // 네트워크 장애
        } else if (error.response.status === 510) {
          // 네이티브에 에러전달
        } else {
          // 공통 메시지 처리 : 403, 409, 412, 500, 501, 504
        }
      }
    } else {
      // error.response가 존재하지 않는 경우 : 서버에서 http option method 오류시 response 값이 없을 수가 있음
      rootStore.appStore.handleNoResponseError(error);
    }
    return Promise.reject(error);
  }
);

export default Api;
