import Mock from 'mockjs'

// 根据数据模板生成模拟数据。
Mock.mock('/api/user/login',{//会拦截url=/api/user/login的请求
    "status": 0,
    "data": {
      "id|1001-1100": 12,
      "username": "admin",
      "email": "admin@51purse.com",
      "phone": null,
      "role": 0,
      "createTime": 1479048325000,
      "updateTime": 1479048325000
    }
})