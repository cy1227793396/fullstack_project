//寄生式继承
// 重点：就是给原型式继承外面套了个壳子。
// 优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成
// 了创建的新对象。
// 缺点：没用到原型，无法复用。

let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

let person5 = clone(parent5);

console.log(person5.getName()); // parent5
console.log(person5.getFriends()); // ["p1", "p2", "p3"]