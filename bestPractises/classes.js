class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    get() {
        console.log(`Product : ${this.name}`)
        console.log(`Price : ${this.price}`)
    }

    canculator(salesText) {
        return this.price + (this.price * salesText)
    }
}

const salseText = 0.05
const product1 = new Products("olma", 10000)
const product2 = new Products("Yogoch", 230000)
product1.get()
const  total = product1.canculator(salseText)
console.log(`salesText : ${total}`)