const express = require('express')

const app = express()

const mw = function(req,res,next)
{
    console.log('这是最简单的中间件');
    next()// 流转关系，交给下一个中间件/路由过，必须调用！
}

// 全局生效的中间件 app.use
app.use(mw)

app.get('/',(req,res)=>{
    res.send('323')
})

app.listen(8082,()=>{
    console.log('object');
})