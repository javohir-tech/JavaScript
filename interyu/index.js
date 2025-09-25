const user = {
    name: "Javohir",
    fisrtName: "Suvonov",
    get fullName() {
        return this.name + " " + this.fisrtName
    },

    set fullName(value) {
        [this.name, this.fisrtName] = value.split(" ")
    }
}

user.fullName = "Ulug'bek Suvonov";
console.log(user.fullName)