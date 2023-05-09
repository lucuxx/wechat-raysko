const CONFIG = {
	// 开发环境配置
	development: {
		baseUrl: 'https://www.raysko.com',
	},
	// 生产环境配置
	production: {
		baseUrl: 'https://www.raysko.com',
	}
}
export default CONFIG[process.env.NODE_ENV];
