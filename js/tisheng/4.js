//require 关键字 引入一个模块 stack Browser
const fs =require('fs');
fs.readFile('./1.js',function(err,data){
    console.log(data.toString());
})
console.log('aaaa');
