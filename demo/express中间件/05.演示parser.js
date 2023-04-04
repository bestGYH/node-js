const express = require('express')

const app = express()


const parser = require('body-parser')
app.use(parser.urlencoded({extended:false}))

app.post('/user',(req,res)=>{
  console.log(req.body);
   res.send('home page')
})


app.listen(9092, () => {
    console.log('这是http://192.168.24.244');
})