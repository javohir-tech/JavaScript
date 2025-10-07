localStorage.setItem('token', 123);
localStorage.setItem('user', 'javohir');
localStorage.setItem('email', 'suvonovjavohir625@gannil.com');

// console.log(localStorage.key(0))

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}---${localStorage[key]}`)
}

// console.log(1)