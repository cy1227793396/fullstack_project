// 组合继承（组合原型链继承和借用构造函数继承）（常用）

// 特点：1、可以继承父类原型上的属性，可以传参，可复用。
// 2、每个新实例引入的构造函数属性是私有的。
// 缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function () {
    return this.name;
}
function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}

// 第一次调用 Parent3()
Child3.prototype = new Parent3();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响 [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'