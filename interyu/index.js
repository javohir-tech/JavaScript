const myMethods = {
    printName() {
        console.log("Employee's name is : " + this.name)
    },
    printPosition() {
        console.log("Employee's position is : " + this.position)
    }
}

const emp1 = { name: "Javohir", position: "front end developer" }
const emp2 = { name: "Jalol", position: "Marksheydr" }

myMethods.printName.call(emp1)
myMethods.printPosition.call(emp1)