//util promisify 方法  将函数promise化        
//引入util模块

const util=require('util')
//引入 fs模块
const fs=require('fs')
let mineReadFile=util.promisify(fs.readFile)
mineReadFile('./resource/content.txt').then(value=>{
    console.log(value.toString()); 
})