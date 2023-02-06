const http = require('http')

const server = http.createServer()
// 绑定request 监听客户端的请求
server.on('request',function(req,res){
    console.log('有人访问了我们的服务器');
})
// 启动服务器 指定端口号
server.listen(8081,function(){
    console.log('server running at http://192.168.20.186:8081')
})

