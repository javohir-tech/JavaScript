class Avto {
    #km;
    static avto_num = 0
    constructor(make, model, rang, yil, narx, km = 0) {
        this.make = make;
        this.model = model;
        this.rang = rang;
        this.yil = yil;
        this.narx = narx;
        this.#km = km
        Avto.avto_num ++
    }



    get_km() {
        return this.#km
    }

    add_km(km) {
        if (km >= 0) {
            this.#km += km
        }else{
            console.log('Moshinani km ni kamaytirip bolmaydi !!! ')
        }
    }
}

const m1 = new Avto("Chevrolet", "Cobalt", "oq", 2022, 15000);
const m2 = new Avto("BMW", "X5", "qora", 2020, 40000);
const m3 = new Avto("Kia", "K5", "kulrang", 2023, 30000);
m1.add_km(3000)
console.log(m1.get_km())
console.log(Avto.avto_num)