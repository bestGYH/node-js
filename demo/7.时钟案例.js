// 读写文件
const fs = require('fs')
// 路径处理
const path = require('path')

// 分别正则匹配 <style></style> 和<script></script>
const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/


fs.readFile(path.join(__dirname, './files/clock/index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('读取文件失败' + err.message);
    // console.log(dataStr);
    resolveCss(dataStr)// 拆解css
    resolveJs(dataStr)// 拆解js
    resolveHtml(dataStr)// 拆解html
})

// 定义处理css样式的方法
function resolveCss(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1);// 返回一个数组 匹配到的在数组第一项
    // 将提取出来的字符串。进行replace
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    // 将提取的样式。写入到index.css
    fs.writeFile(path.join(__dirname, './files/clock/index.css'), newCss, function (err) {
        if (err) return console.log('写入css失败' + err.message);
        console.log('写入样式成功');
    })
}
function resolveJs(htmlStr) {
    const r2 = regScript.exec(htmlStr)

    const newJs = r2[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './files/clock/index.js'), newJs, function (err) {
        if (err) return console.log('写入js失败' + err.message);
        console.log('写入js成功');
    })
}

function resolveHtml(htmlStr) {
    const newHtml = htmlStr.replace(regStyle, '<link rel="styleSheet" href="./index.css"></link>')
        .replace(regScript, '<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname, './files/clock/index.html'), newHtml, function (err) {
        if (err) return console.log('写入html失败' + err.message);
        console.log('写入html成功');
    })
}


/* 
注意点：
    fs只能创建文件，不能创建文件夹
    重复调用writeFile，新写入的内容会覆盖旧的内容
    
*/
