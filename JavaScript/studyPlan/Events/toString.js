class ArrayWrapper {
    constructor(args) {
       this.sum = args.reduce((acc, curr)=>{
            return acc+curr
        }, 0);
        this.nums = [...args]
    }

    valueOf(){
        return this.sum
    }

    toString(){
        return `[${this.nums}]`
    }

}

const obj1 = new ArrayWrapper([1, 2])
const obj2 = new ArrayWrapper([1, 3]);
console.log(String(obj1))
// console.log(obj1.String)
console.log(obj2+obj1)