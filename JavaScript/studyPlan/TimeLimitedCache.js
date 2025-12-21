class TimeLimitCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const javob = this.cache.has(key) && this.cache.get(key).vaqt > now

        this.cache.set(key, {
            value,
            vaqt: now + duration
        })

        return javob
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const item = this.cache.get(key)
            if (item.vaqt > now) {
                return item.value
            }
        }
        return -1
    }

    count() {
        const now = Date.now();
        const result = [];

        for (const [key, item] of this.cache.entries()) {
            if (item.vaqt > now) {
                result.push(key)
            }
        }

        return result
    }
}

const kesh = new TimeLimitCache()

console.log(kesh.set(1, 30, 150));
setTimeout(() => { console.log(kesh.get(1)) }, 100);
setTimeout(() => { console.log(kesh.count()) }, 120);
setTimeout(() => { console.log(kesh.get(1)) }, 160);
setTimeout(() => { console.log(kesh.count()) }, 170);
