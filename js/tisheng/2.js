//执行栈 顶部 当前在运行的代码
// 出栈 内存的回收
//全局作用域（全局变量+函数声明和运行） + 以函数为单位(执行权的交接)

f1()
f2()
console.log(a);

function f1(){
    var a=1;
console.log('1');
}
function f2(){
    console.log('2');
}
 var a=2;
// const f1=()=>{
//     var a=1;
// console.log('1');
// }
// const f2=()=>{
//     console.log('2');
// }