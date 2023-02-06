const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 浏览器请求：http://192.168.20.186:8081/files/clock/index.html
    // const fpath = path.join(__dirname,'../',url)
    // 路径优化
    // 浏览器请求：http://192.168.20.186:8081/index.html
    let fpath = ''
    if(url==='/'){
        // ../ 抵消前面路径
        fpath = path.join(__dirname,'../','/files/clock/index.html',url)
    }else{
        fpath = path.join(__dirname,'../','/files/clock',url)
    }
    console.log(fpath);

    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        // 读取失败
        if (err) {
            return res.end('404 Not found ')
        }
        res.end(dataStr)
    })

})

server.listen(8081,()=>{
    console.log('server running at http://192.168.20.186:8081')
})