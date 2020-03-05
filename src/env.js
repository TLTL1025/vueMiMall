//环境变量的统一配置，封装成模块
//适用于 cros和jsonp的时候
let baseURL;
 
switch (process.env.NODE_ENV) {//nodejs中有个process进程,获取当前nodejs进程里面的一些环境变量，最终会写入nodejs
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;

}

export default {
    baseURL
}