class Shaxs {
    constructor(name, surname, passport , tyil){
        this.name = name;
        this.surname = surname;
        this.passport = passport;
        this.tyil = tyil
    }

    get_info(){
        let info = `${this.name} ${this.surname} `
        info+=`${this.passport} ${this.tyil}`
        return info
    }
}

class Talaba extends Shaxs{
    constructor(name, surname, passport, tyil, talabaId, manzil){
        super(name, surname , passport, tyil)
        this.talabaID = talabaId
        this.kurs = 1
        this.manzil = manzil
    }

    update_kurs(){
        this.kurs++
    }

    set_kurs(kurs){
        this.kurs = kurs
    }   

    get_id(){
        return this.talabaID
    }

    get_kurs(){
        return this.kurs
    }

    get_info(){
        return `${this.name} ${this.surname} ${this.talabaID} ${this.kurs}`
    }
}

class Manzil{
    constructor(uy , kocha , tuman , viloyat){
        this.home = uy;
        this.street = kocha;
        this.town = tuman;
        this.region = viloyat
    }

    get_address(){
        return `${this.home} ${this.street} ${this.town} ${this.region}`
    }
}

const manzil1 = new Manzil(53, "Yoshlik" , "Angren" , "Toshkent") 
const talaba1 = new Talaba("Suvonov" , "Javohir" , "AD452689", 2004, "N854976", manzil1)
console.log(talaba1)
console.log(talaba1.get_info())
console.log(talaba1.manzil.get_address())