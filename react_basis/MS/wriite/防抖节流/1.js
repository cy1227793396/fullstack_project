//节流
// 时间戳法
function throttled1(fn,delay=500){
let oldTime=Date.now()
return function (...args){
    let newTime=Date.now()
    if(newTime-oldTime>=delay){
        fn.apply(null,args)
        oldTime=Date.now()
    }
}
}
// console.log(Date.now());
//定时器法
function throttled2(fn,delay=500){
let timer=null
return function(...args){
    if(!timer){
        timer=setTimeout(()=>{
            fn.apply(this,args)
            timer=null
        },delay)
    }
}
}