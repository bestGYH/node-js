const express = require('express')

const app = express()
//中间件共享res,req
app.use((res,req,next)=>{
    const time   = Date.now()
    req.startTime = time
next()
})

app.get('/',(req,res)=>{
res.send('hello')
})

app.get('/user',(req,res)=>{
    res.send('hello',req.startTime)
})

app.listen(9090,()=>{
    console.log('这是');
})

