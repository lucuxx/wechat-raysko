// common/http.api.js

import * as card from './modules/card.js';
const http = uni.$u.http;

// api 接口管理
const install = (Vue, vm) => {

	Vue.prototype.$api  = {
		// test get api
		// getSearch: (params = {}) => http.get('/http/search', params),
		// test get loading
		// getReqLoading: (params = {}) => http.get('/http/reqloading', params),
		// modules import
		card
	};
}

export default {
	install
}
