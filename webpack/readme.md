-  npm init vitejs/app
   react 脚手架 
   基于vitejs 工程化工具
   npm 命令 node 默认命令

- wabpack
  另外一个vite
  1. template
     src 是开发目录
     main.js 单点入口文件
     通过import把项目组织起来

  2. package.json
  3. npm run dev 3000端口的上开辟一个http服务


- webpack 工程化流程
1. npm init -y
初始化项目为node项目
工程化是node的产物 前端更专业了
2. src/开发目录
mian.js /index.js入口文件
3. npm i webpack-cli -D
 -D 开发依赖 工程化是开发阶段的
4. 把项目运行起来
 npx webpak 
 src/index.js -> dist/main.js 打包的过程
 npx 是后期推出的新功能
   1. 命令行 调用package里的npm包 
   2. 默认production  --mode=development 来设置当前模式 

5. webpack 运行后有什么效果
   - 打包工具 pack bundler src->dist
   import 'a.jpg或 index.css' 都是webpack来做
   - 应用场景
   development 开发 调试更便捷
   production 上线 代码体积小 性能高

6. webpack 默认会去找根目录下的 webpack.config.js 运行
``` js
module.exports={
    mode:'development',
    entry:'./src/index.js',//入口文件
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    }
}
```
7. 何为打包的概念
  从入口进入 根据依赖关系 都将打包成一个文件 bundle.js

8. webpack 默认只处理js文件 如果要es6->es5 也要用loader 
css文件 需要手动添加loader 
webpack可以打包一切静态资源 选配  加载特定类型文件处理的工具
例如 css->css-loader

9. plugins 
    webpack 有插件机制
    html-webpack-plugin把index.html 搬到dist目录下
    把打包结果bundle.js文件自动引入在html中
    
