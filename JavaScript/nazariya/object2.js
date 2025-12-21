function myFunction(a) {
    a.name = "suvonov"
    return a.name
}

const obj = {
    name: "javohir"
}

const b = 23

console.log(myFunction(obj))
console.log(obj.name)