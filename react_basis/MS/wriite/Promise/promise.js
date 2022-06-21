function Promise(executor){
//添加属性
this.PromiseState='pending'
this.PromiseResult=null
this.callbacks=[]
//resolve
const self=this
function resolve(data){
    //判断状态
    if(self.PromiseState!=='pending') return;
//1.修改对象的状态
self.PromiseState='fulfilled'
//2.设置对象的结果值
self.PromiseResult=data
//调用成功的回调函数
self.callbacks.forEach(item=>{
    item.onResolve(data)
})
}
function reject(data){
      //判断状态
      if(self.PromiseState!=='pending') return;
//1.修改对象的状态
self.PromiseState='rejected'
//2.设置对象的结果值
self.PromiseResult=data
//调用失败后的回调
self.callbacks.forEach(item=>{
    item.onResolve(data)
})
}
try {
    //同步调用执行函数
executor(resolve,reject)
} catch (error) {
    reject(error)
}

}
Promise.prototype.then=function(onResolve,onRejected){
// 调用回调函数
if(this.PromiseState==='fulfilled'){
onResolve(this.PromiseResult)
}
if(this.PromiseState==='rejected'){
onRejected(this.PromiseResult)
}
if(this.PromiseState==='pending'){
    //保存回调函数
this.callbacks.push({
    onResolve,
    onRejected
})
}
}