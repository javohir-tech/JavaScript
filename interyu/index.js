const user = {
    name: "Javohir",
    firstName: "Suvonov"
}

Object.defineProperty(user, "fullName", {
    get() {
        return `${this.name} ${this.firstName}`
    },
    set(value) {
        [this.name, this.firstName] = value.split(" ")
    }
})

console.log(user.fullName)

user.fullName = "ulug'bek Suvonov"

for(let key in user){
    console.log(key + ":" + user[key])
}