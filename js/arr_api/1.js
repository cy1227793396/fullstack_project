// 数组和对象 类型都是object 
// 都是数据容器
// 数组是用整数做下标 连续的0到arr.length-1;
// 对象是key:value
const arr = [1, 2, 3, 4, 5];
console.log(Object.prototype.toString.call(arr));
console.log(Array.isArray(arr));


let obj = {
    name: 'amoy',
    sex: '男',
    hometown: '瑞金'
}


//for in 有点慢
for (let key in obj) {
    console.log(key);
}
arr.forEach(function name(params) {

})