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
        if (!res) return -1

        if (res.duration >= now) {
            return res.value
        }else{
            this.map.delete(key)
            return -1
        }
    }

    count() {
        let count = 0;
        const now = performance.now();
        for (let [key, item] of this.map.entries()) {
            if (item.duration >= now) {
                count++
            }else{
                this.map.delete(key)
            }
        }
        return count
    }
};

