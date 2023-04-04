// 不实用app.use()定义，局部生效的中间件

const express = require('express')

const app = express()

const mw = function (req, res, next) {
    console.log('这是最简单的中间件');
    next()// 流转关系，交给下一个中间件/路由过，必须调用！
}
//局部生效的中间件 
app.get('/', mw, (req, res) => {
    res.send('hello')
})

// 多个局部的中间件，等价的使用方式
// app.get('/',mw1,mw2,(req,res)=>{
//     res.send('hello')
//  })
// app.get('/',[mw1,mw2],(req,res)=>{
//      res.send('hello')
// })
app.get('/user', (req, res) => {
    res.send('hello user')
})

app.listen(9092, () => {
    console.log('这是');
})
