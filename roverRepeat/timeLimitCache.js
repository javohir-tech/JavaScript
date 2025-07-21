
class TimeLimitCache {

    constructor() {
        this.map = new Map()
    }

    set(key, value, duration) {
        if (!this.map.has(key)) {
            this.map.set(key,
                {
                    value,
                    "time": Date.now() + duration
                }
            )
            return false
        }
        return this.map.get(key)
    }

    get(key) {
        if (this.map.has(key)) {
            const res = this.map.get(key);
            const timer = Date.now();
            if (res.time > timer) {
                return res.value
            } return -1
        }
        return null
    }

    count() {
        const timer = Date.now();
        const args = this.map.entries();
        let sanoq = 0
        args.map((_, obj) => {
            if (obj.time > timer) {
                sanoq++
            }
        })
        return sanoq
    }
}

const timeLimit = new TimeLimitCache()
console.log(timeLimit.set(1, 42, 1000))
console.log(timeLimit.get(1))
console.log(timeLimit.count())

// console.log(Date.now())