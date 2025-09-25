function user(name) {
    this.name = name
}

user.prototype.sayHi = function () {
    console.log(`hello  ${this.name}`)
}

const user1 = new user("Ali");
const user2 = new user("Vali");

user1.sayHi()
user2.sayHi()