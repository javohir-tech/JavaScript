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
    },
    writable: true, // o'zgartirsa bo'ladi 
    enumerable: true, // for...in orqali ko'rinadi
    configurable: false // o'chirip bo'lmaydi  
})

console.log(user.fullName)

user.fullName = "ulug'bek Suvonov"

for(let key in user){
    console.log(key + ":" + user[key])
}