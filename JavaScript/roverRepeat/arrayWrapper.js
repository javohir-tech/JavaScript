class ArrayWrapper {

    constructor(args) {
        this.args = args
        this.result = args.reduce((acc, curr) => acc + curr, 0)
    }

    valueOf() {
        return this.result
    }

    toString() {
        return `[${this.args}]`
    }
}

const obj1 = new ArrayWrapper([1, 2])
const obj2 = new ArrayWrapper([3, 4])
console.log(obj2+obj1)
console.log(obj1.toString())