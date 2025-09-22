const myMethods = {
    printName(age) {
        console.log("Employee's name is : " + this.name, + " " + age)
    },
    printPosition() {
        console.log("Employee's position is : " + this.position)
    }
}

const emp1 = { name: "Javohir", position: "front end developer" }
const emp2 = { name: "Jalol", position: "Marksheydr" }

myMethods.printName.apply(emp1, [21])
myMethods.printPosition.call(emp1)

function sayAge() {
    console.log(this.age)
}

const myFn = sayAge.bind({ age: 21 });
// sayAge()
myFn()