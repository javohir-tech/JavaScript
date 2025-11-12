import { Avto } from "./avto.js";

const m1 = new Avto("Chevrolet", "Cobalt", "oq", 2022, 15000);
const m2 = new Avto("BMW", "X5", "qora", 2020, 40000);
const m3 = new Avto("Kia", "K5", "kulrang", 2023, 30000);
m1.add_km(3000)
console.log(m1)
console.log(m1.get_km())
console.log(Avto.avto_num)