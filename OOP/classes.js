class Talaba{
    constructor(name , surname , byear){
        this.name = name
        this.surname = surname
        this.byear = byear
    }

    get_name(){
        return this.name
    }

    get_age(year){
        return year-this.byear
    }
}

talaba1 = new Talaba("Javohir" , "Suvonov" , 2004)

console.log(talaba1.get_name())
console.log(talaba1.get_age(2025))