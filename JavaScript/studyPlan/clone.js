class TimeLimitCache {
    constructor() {
        this.cache = new Map
    }

    set(key, qiymat, duration) {
        const now = Date.now()
        const javob = this.cache.has(key) && this.cache.get(key).vaqt > now

        this.cache.set(key, {
            qiymat,
            vaqt: now + duration
        })

        return javob
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const item = this.cache.get(key)
            if (item.vaqt > now) {
                return item.qiymat
            }
        }
        return -1
    }

    count() {
        const now = Date.now()
        let counter = 0;
        for (const [_, item] of this.cache.entries()) {
            if (item.vaqt > now) {
                counter++
            }
        }
        return counter
    }
}


const kesh = new TimeLimitCache();

console.log(kesh.set(1, 29, 150));
setTimeout(() => {
    console.log(kesh.get(1))
    console.log(kesh.count())
}, 100);
setTimeout(() => {
    console.log(kesh.get(1))
    console.log(kesh.count())
}, 160)