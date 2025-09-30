// function Car(model, year) {
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.signal = function () {
//     console.log(`${this.model} signal chalayapti `)
// }

// const bmw = new Car('BMW', 2014);
// console.log(bmw);
// bmw.signal();

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    };

    //signal bbu funksiya lekin class ichida method deyiladi
    signal() {
        console.log(`${this.model} signal chalayaptiiii`)
    }
}

const bmw = new Car("BMW", 2014);
console.log(bmw);
bmw.signal()