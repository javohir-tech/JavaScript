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
        Avto.avto_num++
    }



    get_km() {
        return this.#km
    }

    add_km(km) {
        if (km >= 0) {
            this.#km += km
        } else {
            console.log('Moshinani km ni kamaytirip bolmaydi !!! ')
        }
    }
}

export { Avto }