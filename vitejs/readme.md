- react 官方脚手架
  create-react-app
  npm i create-react-app -g

- npm -g 安装到哪个目录
  安装的是包
  全局 prefix 目录下 可通过 npm config ls
  环境变量

- cnpm 国内淘宝镜像
- pnpm
  高性能 npm
  先设置 registry

- npx
  实验一些功能 或直接运行 node-modules 目录下的包时有用
  不用安装 直接可以运行

- 为什么需要 vite？
  vite 是 vue 的作者尤雨溪 带货的工程化套件 替代 webpack
  - vite 为什么那么快？
    vite 比 webpack 快 6 倍 1.文件的请求 依赖 花时间  
     webpcak 叫 bundler 也叫打包器 打包成一个文件
    entry -> output 罪魁祸首
    vite no bundler 按需加载 - 使用现代浏览器 直接支持 es mudule 加载
    从<script type="module" script="/src/main.jsx"> </script>
    - 遇到的 import 都将作为一个新的加载
    - 编译的过程
      module script ->main.jsx ->按需加载 react
      react -dom index.css... ->编译器 babel (实时)
    - 浏览到新的页面时 再 import 编译执行
    - 在 vite 项目中 一个 inport 语句代表要给 http 请求
      vite dev server 会读取本地文件 返回浏览器可以解析的代码
      vite 提倡 no bundle
      利用浏览器原生 ES 模块的支持 实现开发阶段的 DevServer
      进行模块的按需加载 而不是先整体打包 再进行加载- webpack
