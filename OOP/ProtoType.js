const obj = {}

Object.defineProperty(obj , "korinadi" , {
    value : 42,
    enumerable : true
})

Object.defineProperty(obj, "korinmaydi" , {
    value : 99,
    enumerable: false
})
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))