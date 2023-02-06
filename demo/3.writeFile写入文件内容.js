// 导入
const fs = require('fs')

// 调用
/* 
参数1：存放路径
参数2:要写入的内容
参数3:编码格式。一般utf8
参数4:回调函数，失败结果，成功结果
*/
fs.writeFile('./files123/node写入.txt', '这是node的writeFile写入的文件内容', 'utf-8', function (err) {
  /* 
  如果写入成功：null
  如果写入失败：错误对象
  */
 if(err){
  return console.log('写入失败！'+err.message);
 }
  console.log('文件写入成功！');

})