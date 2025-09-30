function Car(model, year) {
    this.model = model;
    this.year = year;
}

Car.prototype.signal = function () {
    console.log(`${this.model} signal chalayapti `)
}

const bmw = new Car('BMW', 2014);
console.log(bmw);
bmw.signal()