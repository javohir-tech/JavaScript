class ArrayWrapper {
    constructor(args) {
        this.sum = args.reduce((acc, curr) => {
            return acc + curr
        }, 0);
        this.nums = [...args]
    }

    valueOf() {
        return this.sum
    }

    toString() {
        return `[${this.nums}]`
    }
}

const obj1 = new ArrayWrapper([1, 2]);
console.log(obj1.toString())
const obj2 = new ArrayWrapper([4, 3]);
console.log(obj1+obj2)
