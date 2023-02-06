const http = require('http')

const server = http.createServer()

/* 
req 是请求对象。包含了与客户端相关的数据和属性
*/
server.on('request',(req,res)=>{
const str = `您请求的 URL 地址是 ${req.url},请求的 method 类型为 ${req.method}`
// 调用res.setHeader() 方法，设置 Content-Type 响应头解决中文乱码的问题
res.setHeader('Content-Type','text/html;charset=utf-8')
res.end(str)
})
server.listen(8081,()=>{
    console.log('server running at http://192.168.20.186:8081')

})

