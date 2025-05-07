class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // key: { value, expiry }
    }

    set(key, value, duration) {
        const now = Date.now();
        const isExistingValid = this.cache.has(key) && this.cache.get(key).expiry > now;

        this.cache.set(key, {
            value,
            expiry: now + duration
        });
        console.log(this.cache)
        return isExistingValid;
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const item = this.cache.get(key);
            if (item.expiry > now) {
                return item.value;
            }
        }
        return -1;
    }

    count() {
        const now = Date.now();
        let count = 0;
        for (const [_, item] of this.cache.entries()) {
            if (item.expiry > now) {
                count++;
            }
        }
        return count;
    }
}

const cache = new TimeLimitedCache();

console.log(cache.set(1, 39, 100)); // false
setTimeout(() => console.log(cache.get(1)), 50);   // 42
setTimeout(() => console.log(cache.count()), 50);  // 1
setTimeout(() => console.log(cache.get(1)), 30);  // -1

