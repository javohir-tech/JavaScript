class TimeLimitCache {
    constructor() {
        this.cache = new Map
    }

    set(key, value, duration) {
        const now = Date.now()
        const javob = this.cache.has(key) && this.cache.get(key).expiry > now

        this.cache.set(key, {
            value,
            expiry: now + duration
        })
        return javob
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const item = this.cache.get(key);
            if (item.expiry > now) {
                return item.value
            }
        }
        return -1
    }

    count() {
        const now = Date.now()
        let counter = 0;
        for (const [_, item] of this.cache.entries()) {
            if (item.expiry > now) {
                counter++
            }
        }
        return counter
    }
}

const cache = new TimeLimitCache()

console.log(cache.set(1, 42, 100));
console.log(cache.set(2, 41, 200));
// console.log(cache.set(2, 42, 100));
setTimeout(() => { console.log(cache.get(1)) }, 50)
setTimeout(() => { console.log(cache.get(2)) }, 50)
setTimeout(() => { console.log(cache.count()) }, 150)
setTimeout(() => { console.log(cache.get(1)) }, 150)
setTimeout(() => { console.log(cache.get(2)) }, 150)