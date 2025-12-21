class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const javob = this.cache.has(key) && this.cache.get(key).time > duration;

        this.cache.set(key, {
            "value": value,
            "time": duration + now
        })
        return javob
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const item = this.cache.get(key)
            if (item.time > now) {
                return item.value
            }
        }
        return -1
    }

    count() {
        const now = Date.now();
        let complete = 0;
        for (const [_, item] of this.cache.entries()) {
            if (item.time > now) {
                complete++
            }
        }
        return complete
    }

}

const kesh = new TimeLimitedCache()

console.log(kesh.set(1, 23, 100))
setTimeout(() => {
    console.log(kesh.get(1))
}, 50)
setTimeout(() => {
    console.log(kesh.count())
}, 70)
setTimeout(() => {
    console.log(kesh.get(1))
}, 110)