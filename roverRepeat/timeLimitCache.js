
class TimeLimitCache {

    constructor() {
        this.map = new Map()
    }

    set(key, value, duration) {

        const res =  this.map.has(key) && this.map.get(key).time > duration

            this.map.set(key,
                {
                    value,
                    "time": Date.now() + duration
                }
            )
        return res
    }

    get(key) {
        if (this.map.has(key)) {
            const res = this.map.get(key);
            const timer = Date.now();
            if (res.time > timer) {
                return res.value
            } 
        }
        return -1
    }

    count() {
        const timer = Date.now();
        const args = this.map.entries();
        let sanoq = 0;
        for (const [_, obj] of this.map.entries()) {
            if (obj.time > timer) {
                sanoq++
            }
        }
        return sanoq
    }
}

const timeLimit = new TimeLimitCache()
console.log(timeLimit.set(1, 42, 1000))
console.log(timeLimit.set(2, 42, 1000))
setTimeout(()=>{
    console.log(timeLimit.get(1))
} , 500);
setTimeout(()=>{
    console.log(timeLimit.count())
} , 200)

// console.log(Date.now())