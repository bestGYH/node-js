


// 导入node内置的querystring
const qs = require('querystring')
// 1.定义

const parser = (req, res, next) => {
    // 2.监听req的data 事件

    /* 
    数据是切割后，
    */
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    // 接收完毕后，自动触发req的end
    req.on('end', () => {
        // str是完成的请求体数据
        console.log('自定义',str);
        //TODO:把字符串请求体数据。转为对象格式

        const body = qs.parse(str)
        req.body = body
        next()

    })

}


module.exports = parser