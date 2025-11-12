class Talaba {
    constructor(name, surname, byear) {
        this.name = name
        this.surname = surname
        this.byear = byear
        this.kurs = 1
    }

    set_kurs(kurs) {
        this.kurs = kurs
    }

    update_kurs() {
        if (this.kurs < 4) {
            this.kurs++
        } else {
            console.log("Kurs maximal")
        }
    }

    get_name() {
        return this.name
    }

    get_fullName() {
        return `${this.name} ${this.surname}`
    }

    get_age(year) {
        return year - this.byear
    }

    get_info() {
        return `${this.get_fullName} ${this.kurs} kursda o'qiydi`
    }

    see_class_methods() {
        return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(m => m != 'constructor')
    }
}

class Fan {
    constructor(name) {
        this.name = name;
        this.talabalar_soni = 0;
        this.talabalar = []
    }

    add_student(talaba) {
        this.talabalar.push(talaba)
        this.talabalar_soni++
    }

    get_talablar() {
        return this.talabalar.map(talaba => talaba.get_fullName())
    }

    get_talabalar_soni() {
        return this.talabalar_soni
    }

    get_name() {
        return this.name
    }
}



const talaba1 = new Talaba("Javohir", "Suvonov", 2004)
const talaba2 = new Talaba("Yahyo", "Ergashev", 2005)
console.log(talaba1)
talaba1.set_kurs(3)
talaba1.update_kurs()
console.log(talaba1.see_class_methods())

const Matem = new Fan("Oliy Matematika")
Matem.add_student(talaba1)
Matem.add_student(talaba2)
console.log(Matem.get_talablar())
