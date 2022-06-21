// const arr =[]
//const arr1=new Array(7)// 使用构造函数不是为了创建空数组这么无聊
const arr=(new Array(8)).fill(1);
console.log(arr);
const arr2=[1,2,3,4,5]

for(let item of arr2){
    console.log(item);
}

arr2.forEach((item,index)=>{
    console.log(item,index);
})
//返回新数组
arr2.map((item,index)=>{
    console.log(item,index);
})