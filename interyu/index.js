const user1 = { age: 21 };

const user2 = {...user1};

user2.age = 22;

console.log(user1.age)
console.log(user2.age)