const path=require('path')
//使用 commonjs模块化方案引入path内置模块
console.log(path.join(__dirname,'dist')); 

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    }
}