function user(name, age) {
    this.name = name;
    this.age = age
}

const javohir = new user("Javohir", new Date(2004, 4, 29));

console.log(javohir)

Object.defineProperty(this, "age", {
    get() {
        let today = new Date().getFullYear();
        return  today - this.age.getFullYear()
    }
})

console.log(javohir.name)
console.log(javohir.age)