console.log(1); // call stack

setTimeout(() => {
    console.log(2) // wep api --> callback queue --> call stack
})

console.log(3) // call stack