// 导入
const fs = require('fs')

// 调用
/* 
参数1：路径
参数2:编码格式。一般utf8
参数3:回调函数，失败结果，成功结果
*/
fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
    /*  
    如果成功 err结果是null
    如果失败。err结果是一个对象
    */ 
    console.log('失败结果：',err);
    console.log('----------');
    console.log('成功结果：',dataStr);// 如果失败dataStr结果是undefined

})