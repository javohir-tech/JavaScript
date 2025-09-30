class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year
    }

    signal() {
        console.log(`this car is ${this.name} and it's year is ${this.year}`)
    }
}

const bmw = new Car("BMW", 2014);
console.log(bmw);
bmw.signal()