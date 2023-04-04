// 这是路由模块

// 倒入
const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载
router.get('/user/list',(req,res)=>{
    res.send('get user list')
})

router.post('/user/add',(req,res)=>{
    res.send('Add new user')
})
//导出
module.exports=router
