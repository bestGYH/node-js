
exports.name = 'gyh'

console.log(module.exports);// { name: 'gyh' }



module.exports= {
    age:19
}
console.log(module.exports);// { age: 19 }

exports.address = '这是地址'

console.log(module.exports);// { age: 19 }

console.log(exports);//{ name: 'gyh', address: '这是地址' }
