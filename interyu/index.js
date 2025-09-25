const user = {
    age: 21,
    toString() {
        return String(this.age)
    }
}

const user2 = {
    age: 19,
    valueOf() {
        return this.age
    }
}

const num = user > user2;
console.log(num)