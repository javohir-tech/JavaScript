class Avto {
    #km;
    constructor(make, model, rang, yil, narx, km = 0) {
        this.make = make;
        this.model = model;
        this.rang = rang;
        this.yil = yil;
        this.narx = narx;
        this.#km = km
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

const avto1 = new Avto("GM", "Gentra", "qora", 2020, 12000, 1000);
avto1.add_km(-3000)
console.log(avto1.get_km())