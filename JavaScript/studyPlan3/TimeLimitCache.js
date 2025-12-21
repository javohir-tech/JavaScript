class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const time = Date.now();
        const result = this.cache.has(key) && this.cache.get(key).duration > time;
        this.cache.set(key, {
            value: value,
            duration: Date.now() + duration
        })
        console.log(this.cache)

        return result
    }

    get(key) {
        const time = Date.now();
        if (this.cache.has(key)) {
            const result = this.cache.get(key)
            if (result.duration > time) {
                return result.value
            }
        }
        return -1
    }

    count() {
        const time = Date.now();
        let complate = 0;
        for (const [_, item] of this.cache.entries()) {
            if (item.duration > time) {
                complate++
            }
        }
        return complate
    }
}

const timeLimited = new TimeLimitedCache();

console.log(timeLimited.set(1, 42, 100))
setTimeout(() => {
    console.log(timeLimited.count())
}, 50)
setTimeout(() => {
    console.log(timeLimited.get(1))
}, 50)
setTimeout(() => {
    console.log(timeLimited.count())
}, 150)
