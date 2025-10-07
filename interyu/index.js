localStorage.setItem('token', 123);
localStorage.setItem('user', 'javohir');
localStorage.setItem('email', 'suvonovjavohir625@gmail.com');

// console.log(localStorage.key(0))

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     console.log(`${key}---${localStorage[key]}`)
// }

// for(let key in localStorage){
//     if(!localStorage.hasOwnProperty(key)){
//         continue
//     }
//     console.log(key)
// }

// const keys = Object.keys(localStorage);
// console.log(keys)
// for (let key in keys) {
//     console.log(`${keys[key]} ---- ${localStorage[keys[key]]}`)
// }

console.log({ name: 'javohir' })
console.log(JSON.stringify({ name: 'javohir' }))
const user = JSON.stringify({ name: 'javohir' });
console.log(JSON.parse(user))

// console.log(1)