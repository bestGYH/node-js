const http = require('http')

const server = http.createServer()

/* 
req 是请求对象。包含了与客户端相关的数据和属性
*/
server.on('request',(req,res)=>{
// 客户端请求的 URL 地址
 const url = req.url
 // 客户端请求的 method 类型
 const method = req.method
const str = `you request url is${url},and request methodis ${method}`
// 调用res.end()方法，向客户端响应一些内容
res.end(str)
})
server.listen(8081,()=>{
    console.log('server running at http://192.168.20.186:8081')

})

