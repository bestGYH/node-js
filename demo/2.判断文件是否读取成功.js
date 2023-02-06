// 导入
const fs = require('fs')

// 调用
fs.readFile('./files/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(`读取文件失败!${err.message}`);
    }
    console.log(`读取文件成功!${dataStr}`);

})