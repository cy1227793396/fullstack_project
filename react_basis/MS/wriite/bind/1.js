function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

// fn.call(obj,1,2); // this会变成传入的obj，传入的参数必须是一个数组；{ myname: '张三' } [ 1, 2 ]
// fn(1,2) // this指向window

Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数
    const args = [...arguments].slice(1),
          fn = this;

    return function Fn() {

        // 根据调用方式，传入不同绑定值
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments)); 
    }

