const obj = {
    name: "javohir",
    age: 21,
    hello() {
        console.log("hello . I am " +  this.name + ". I  am " + this.age + "years old ")
    }
};

// const res =  Object.getOwnPropertyDescriptor(obj , "name");
const tune = Object.defineProperty(obj, "hello", {
    value: "javohir",
    writable: true,
    enumerable: false,
    configurable: true
})

// obj.name = "suvonov"

console.log(Object.values(obj))