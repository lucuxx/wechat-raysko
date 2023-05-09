// test user request api
const http = uni.$u.http;

export function getUserInfo(params){
	return http.get('/http/getUserInfo', params)
}

export const fetchCardInfo = (params, config = {}) => http.get(`/cms/open/id_card/${params.id}`, params, config)