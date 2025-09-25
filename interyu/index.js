function updateDate(obj) {
    obj.brand = "toyoto"
}

const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
}

console.log(car)
updateDate(car);
console.log(car)