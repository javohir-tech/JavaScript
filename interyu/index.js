const person = {
    isHuman : false,
    printName(){
        console.log(`My name is${this.name} . Am i human ? : ${this.isHuman}`)
    }
}

const javohir = Object.create(person);

javohir.name = "Javohir";
javohir.isHuman = true;

javohir.printName()