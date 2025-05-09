class timeLimitCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const javob = this.cache.has(key) && this.cache.get(key) > duration;

        this.cache.set(key, {
            value,
            "time": duration + now
        })
        return javob
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const item = this.cache.get(key)
            if (item.time > now) {
                return item
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

const kesh = new timeLimitCache()

console.log(kesh.set(1, 23, 100))
setTimeout(() => {
    console.log(kesh.get(1))
}, 50)
setTimeout(()=>{
    console.log(kesh.count())
}, 70)