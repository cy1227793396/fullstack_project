//1.创建一个新对象
//2.新对象的原型指向构造函数的原型对象
//3.将构造函数的this绑定到新对象上
//4.根据构造函数的返回类型作判断 如果是原始类型则忽略直接返回新对象 如果是对象类型则返回这个对象
function mynew(Func,...args){
    const newObj={}
    newObj.__proto__=Func.prototype
    let res=Func.apply(newObj,args)
    return res instanceof Object? res:newObj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    console.log(this.name)
}

let p = mynew(Person, "huihui", 123)
console.log(p) // Person {name: "huihui", age: 123}
p.say() // 