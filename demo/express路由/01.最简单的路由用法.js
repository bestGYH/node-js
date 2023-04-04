const express = require('express')
const app = express()
//挂在路由
app.get('/',(req,res)=>{
    res.send("hell,world")
})


app.listen(80,()=>{
    console.log('server at ');
})
