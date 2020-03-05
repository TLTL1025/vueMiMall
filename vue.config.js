module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        // 以上的ip和端口是我们本机的;下面为需要跨域的
        proxy:{
            '/api':{
                target:'https://www.imooc.com',
                changOrigin:false,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}