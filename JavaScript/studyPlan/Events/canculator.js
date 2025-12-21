class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero is not allowed')
        }
        this.result = this.result / value;
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value
        return this
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result
    }
}

const calc= new Calculator(10)
const result = calc.add(5).subtract(8).multiply(2).divide(2).power(2).getResult();
console.log(result); // Natija: 9