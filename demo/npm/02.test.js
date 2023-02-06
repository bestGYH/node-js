const Time = require('./01.dateFormat')

const dt = new Date()

console.log(dt);
const newTime = Time.dateFormat(dt)
console.log(newTime);

// 使用第三方包
/* 
1.使用npm安装第三方包：npm i moment
2.导入，使用第三方包,导入的名称就是装包的名称
*/

const moment = require('moment')
const newDt = moment().format("YYYY-MM-DD hh:mm:ss")
console.log(newDt);

// const packTime = require('../dateFormat-gyh/index')
// const packTime = require('../dateFormat-gyh')
