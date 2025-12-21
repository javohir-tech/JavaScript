const obj = {
    name: "javohir",
    age: 21,
    hello() {
        console.log("hello . I am " + this.name + ". I  am " + this.age + "years old ")
    }
};

const jav = {};

// const res =  Object.getOwnPropertyDescriptor(obj , "name");
// const tune = Object.defineProperty(obj, "name", {
//     value: "javohir",
//     writable: true,
//     enumerable: true,
//     configurable: false
// })

const tune = Object.defineProperties(jav, {
    name: { writable: true, value: "javohir" },
    age: { value: 21, configurable: true }
})

console.log(jav['name'])

console.log(jav['age'])

// delete obj.name
// obj.name = "suvonov"

// console.log(Object.values(obj))
console.log(Object.getOwnPropertyDescriptors(jav))