//构造函数继承 用.call()和.apply()将父类构造函数引入子类函数

// 特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
// 2、解决了原型链继承缺点1、2、3。
// 3、可以继承多个构造函数属性（call多个）。
// 4、在子实例中可向父实例传参。
// 缺点：1、只能继承父类构造函数的属性。
// 2、无法实现构造函数的复用。（每次用每次都要重新调用）
// 3、每个新实例都有父类构造函数的副本，臃肿。
function Parent(){
    this.name = 'parent1';
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(){
    Parent.call(this);
    this.type = 'child'
}

let child = new Child();
console.log(child);  // 没问题 Child { name: 'parent1', type: 'child' }
console.log(child.getName());//报错