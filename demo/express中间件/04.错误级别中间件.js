const express = require('express')

const app = express()

app.get('/',(req,res)=>{
   throw new Error('服务器报错')
   res.send('home page')
})


// 定义错误级别中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误',err.message);
    res.send('Error'+err.message)
    next()
})


app.listen(9092, () => {
    console.log('这是http://192.168.24.244');
})