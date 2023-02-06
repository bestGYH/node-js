const path = require('path')

const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName);// index.html

const newTxt = path.basename(fullName,'.html')
console.log(newTxt);// index

const fext = path.extname(fpath)
console.log(fext);// index


