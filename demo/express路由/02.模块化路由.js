const express = require('express')
const app = express()

// 导入

const router = require('./03.router.js')

// 注册

app.use(router)// app.use函数的作用，注册全局中间件

//在注册路由模块的时候,在其前为其添加前缀，指定访问前缀
// app.use('/api',router)
app.listen(8082,()=>{
    console.log('http://192.168.24.244:8082 ');
})
