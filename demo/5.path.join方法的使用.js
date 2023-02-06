 const path = require('path')

 const fs = require('fs')
// 注意：../ 会抵消前面的路径
 const pathStr = path.join('/a','b/c','../','/d','/e')
console.log(pathStr);// \a\b\d\e

const pathStr2 = path.join('/a','b/c','../../','/d','/e')
console.log(pathStr2);// \a\d\e


fs.readFile(path.join(__dirname,'/files/1.txt'),'utf8',function (err,dataStr){
    if (err) {
        return console.log(`读取文件失败!${err.message}`);
    }
    console.log(`读取文件成功!${dataStr}`);
})