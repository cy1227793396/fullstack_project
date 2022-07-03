- fullstack 全栈
  1. 前端方向使用 vitejs/app 工程化 生成单页应用
  2. 后端使用 开源的 Neteasecloud
     - .git 删除
       同一个项目下不能有多个 git
  3. 前端和后端怎么交流
     axios api ->
     frontend UI 组件 需要数据（fastmock 假数据）
     packed api 接口
     前后端分离
     后端：https://gitee.com/MRyanzhen/new-netease-cloud-music-api.git

npm install -g cnpm -registry=https://registry.npm.taobao.org
全局安装 cnpm 来自阿里
npm i 是去国外的服务器上去把 package.json 里的依赖的包下载  
 慢 且 易出错
cnpm i 到阿里云上下载，更快
-registry 手动设置安装源

- react 全家桶模板
  react 组件化， MVVM 响应式
  react-router 路由
  redux 数据流管理
  前端 -> api -> redux -> 后端

- react 是声明式的 UI 组件开发组件

  1. 那么多的组件，很多 api 组件
  2. 可以用组件来声明功能， 更好读

- react + reactDOM
  react-router + react-router-dom
  react + react-redux

- 数据仓库的搭建过程

  1. 从 react-redux 中解构 Provider
     声明给应用添加数据管理功能
  2. store 专有目录下
     createStore 创建仓库实例
  3. createStore 方法接收一个 reducer 函数

  4. reset
     三元 使用了 styled-components 提供的 createGlobalStyle 全局样式
     style.div`` wrapper 容器 hash 化
  5. adapter

  - 小型项目没必要用 redux
    如果你在想要不要用 redux 那就不要用
    - 如果足够复杂 模块化 reducer 迁移到 pages 相应模块下
      pages/store 新的目录结构
  - store 中央 src/store + 模块化 @pages/store{n}

  - 修改状态有固定流程
    - 属于 actionCreators
      - 一般标配两个 action 一个同步的 一个异步的
      - dispatch 才能触发
      - action 对象固定格式 {type：}
      - type 方便我们把 action 为什么要改变记录下来
      - 从 init -> 任何 action 状态 都是可被追溯的
      - 数据管理的严谨性

- styled-commponents
  页面 播放歌曲 动态高度 props 传参
  ${函数} 函数的返回值
  页面的播放状态

- 移动端一般必须 better-scroll 生成的 scroll 组件

1. 滚动体验
2. 下拉刷新 上拉加载更多
3. 使用了神三元 封装的 Scroll 组件
4. 移动端加载更多的标配

- 数据管理跨页面级别的组件
  redux 可以用来共享数据，本质
  父子组件之间 共享数据 好搞
  爷孙 周围的人共享 难搞 redux connect
  redux 共享数据可以跨页面级别 跨层级

- redux 架构思路

  1. 数据管理和组件，在有了 redux 之后 是平级关系
     /pages /store
  2. 模块化数据管理，每个模块 reducer+action 下放到页面路由模块中
  3. 每个模块都提供 index.js 灵魂 所有的 reducer action constants 都一起 export 清单文件

- react 组件渲染原理

1. 挂载
2. 当状态更新时 mvvm JSX 从头到尾重新编译
3. recommend 多个重要子组件 Slider 等
4. 给 相对独立的组件加 memo 只要外界给它的 props 没有变 就不会重新编译
5. 热更新 页面局部

- memo 组件性能优化
  1. 子组件
  2. 父组件 数据复杂 可能有多项改变状态的地方
  3. 父组件的改变 没有影响到子组件 (props 未变，或者没有 props)
  4. 组件外面都加 memo
- styled-components 原则

  1. 最外层容器 使用 styled-components 接管
     Wrapper Container
  2. List + ListItem 方便样式的复用

- 图片延迟加载
  1. react-lazyload 声明式组件 lazyload +placeholder 包住
     原来的图片
  2. Scroll onScroll react-lazyload 去 forceCheck
