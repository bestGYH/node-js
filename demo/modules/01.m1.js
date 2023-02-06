// 在定义模块中，默认exports是空对象
console.log('这是一个自定义模块');

//module.exports 对象上挂在一个属性
module.exports.username = 'gyh'

module.exports.sayHello = ()=>{
    console.log('Hello!');
}