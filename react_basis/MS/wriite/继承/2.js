//原型链继承  让孩子的propotype指向new的父亲实例

// 特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新 实例不会继承父类实例的属性！
// 缺点：1、新实例无法向父类构造函数传参。
// 2、继承单一。
// 3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属
// 性，另一个实例的原 型属性也会被修改！）
function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
  }
  function Child() {
    this.type = 'child2';
  }
  Child.prototype = new Parent();
  console.log(new Child())//Parent { type: 'child2' }
  var s1 = new Child();
var s2 = new Child();
console.log(s1.name);//parent1
console.log(s1.type);//child2
s1.play.push(4);
console.log(s1.play, s2.play);//[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]