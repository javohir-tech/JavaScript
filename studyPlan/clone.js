class TimeLimitCache {
    constructor() {
        this.cache = new Map()
    }

    set(key, value, duration) {
        const now = Date.now();
        const javob = this.cache.has(key) && this.cache.has(key).vaqt > now;

        this.cache.set(key, {
            value,
            vaqt: now + duration
        });
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
        const now = Date.now()
        let counter = 0
        for (const [_, item] of this.cache.entries()) {
            counter++
        }
        return counter
    }
}

const cache =  new TimeLimitCache();

console.log(cache.set(1, 625, 150));
setTimeout(()=>{console.log(cache.get(1))}, 100);
setTimeout(()=>{
    console.log(cache.count())
}, 120);
setTimeout(()=>{console.log(cache.get(1))}, 160);
