class TimeLimitedCache {

    constructor() {
        this.map = new Map()
    }

    set(key, value, duration) {
        const now = performance.now();
       

        const isActive = this.map.has(key) && this.map.get(key).duration > now

        this.map.set(key, {
            value,
            duration: performance.now() + duration
        })

        return isActive
    }
    get(key) {
        const now = performance.now();
        const res = this.map.get(key);
        if (res.duration > now) {
            return res
        } else {
            return -1;
        }
    }

    count() {
        let count = 0;
        const now = performance.now();
        for (let [_, args] of this.map.entries()) {
            if (args.duration > now) {
                count++
            }
        }
        return count
    }
};

const timeLimitedCache = new TimeLimitedCache()
// console.log(timeLimitedCache.set(1, 42, 100))
console.log(timeLimitedCache.set(1, 42, 100), )
console.log(timeLimitedCache.set(1, 42, 100), 'salom')
timeLimitedCache.set(2, 41, 120)
setTimeout(() => {
    console.log(timeLimitedCache.get(1))
}, 50);
setTimeout(() => {
    console.log(timeLimitedCache.get(2))
}, 130)
setTimeout(() => {
    console.log(timeLimitedCache.count())
}, 30);

