

//2.

const express = require('express')

const app = express()
const bodyParser = require('./07.封装自定义中间件parser')
app.use(bodyParser)
// // 导入node内置的querystring
// const qs = require('querystring')
// // 1.定义
// app.use((req, res, next) => {
//     // 2.监听req的data 事件

//     /* 
//     数据是切割后，
//     */
//     let str = ''
//     req.on('data', (chunk) => {
//         str += chunk
//     })
//     // 接收完毕后，自动触发req的end
//     req.on('end', () => {
//         // str是完成的请求体数据
//         console.log(str);
//         //TODO:把字符串请求体数据。转为对象格式

//         const body = qs.parse(str)
//         req.body = body
//         next()

//     })

// })


app.post('/user', (req, res) => {
    res.send(req.body)
})



app.listen(9092, () => {
    console.log('这是http://192.168.24.244');
})