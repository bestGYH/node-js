// 1 导入
const fs = require('fs')

// 2.调用
fs.readFile('./files/成绩.txt','utf8',function (err,dataStr){
    // 3.判断是否读取成功
    if(err){
        return console.log('读取失败！'+err.message);
    }
    // console.log('读取成功！'+dataStr);
    //4 处理数据
    const arrOld = dataStr.split(' ')
    console.log('转为数组：',arrOld);
    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    console.log('替换=：',arrNew);
    const newStr = arrNew.join('\r\n')
    console.log('整理后的内容：',newStr);

    //5 写入
    fs.writeFile('./files/成绩-ok.txt',newStr,function (err){
        if(err){
            console.log('写入文件失败！'+err.message);
        }
        console.log('写入文件成功！');
    })
})