function myFunction() {
    return "hello"
}

function seyHello(func, name) {
    return func() + " " + name
}

console.log(seyHello(myFunction, "javohir"))

function returnFunction() {
    return function () {
        return "hello"
    }
}

const func =  returnFunction()
console.log(func())