/**
 * 
 * 面试中的编程题 写一个函数
 * 传统的面向对象语言 实例
 * dog.__proto__
 * a是b的实例 
 * js中
 * b是a的原型对象
 * b是a的原型链上的对象
 * 
 * @function myInstanceof 实现
 * @params a 对象    b对象
 * @returns boolean
 */
function Cat() {

}

function Dog() {
    //构造函数
}
Dog.prototype.sayHi = function() {

}
const dog = new Dog();

function myInstanceof(a, b) {
    let proto = Object.getPrototypeOf(a);
    let prototype = b.prototype;
    //console.log(proto, a.__proto__);
    // if(proto==b.prototype) return true;
    // return false;
    while (true) {
        if (!proto)
            return false;
        if (proto == prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }

}
console.log(myInstanceof(dog, Dog));
console.log(myInstanceof(dog, Object));