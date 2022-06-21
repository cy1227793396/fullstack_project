let obj={
    a:1,
    b:2,
    c:{name:'11'}
}

// console.log(obj['a']);
//浅拷贝
function shallowClone(obj){
    let newObj={}
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            newObj[prop]=obj[prop]
        }
    }
    return newObj
}
let obj1=shallowClone(obj)
obj1.a=5
obj1.c.name='22'
console.log(obj);
console.log(obj1);


