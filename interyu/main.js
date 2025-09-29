export default class User{
    constructor(name){
        this.name = name
    }
}

export function sayHi(obj){
    console.log(`Hello ${obj.name}`)
}