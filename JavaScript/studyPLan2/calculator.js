class Calculator {

    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this
    }

    subtract(value) {
        this.result -= value;
        return this
    }

    multiply(value) {
        this.result *= value;
        return this
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed")
        }
        this.result = this.result / value
        return this
    }

    power(value) {
        this.result **= value
        return this
    }

    getResult() {
        return this.result
    }
}

const calc = new Calculator(10);

calc.add(3).subtract(7).multiply(2).divide(3).power(2)
console.log(calc.getResult())