class EventEmitter {

    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callBack) {

        const res = callBack;
        if (!this.events.has(eventName)) {
            this.events.set(eventName, [res])
        } else {
            this.events.set(eventName, [...this.events.get(eventName), res])
        }
        return {
            unsubscribe: () => {
                const index = this.events.get(eventName).indexOf(res)
                this.events.get(eventName).splice(index, 1)
            }
        };

    }

    emit(eventName, args = []) {
        const result = []
        if (this.events.has(eventName)) {
            this.events.get(eventName).forEach(func => {
                const res = func(...args)
                result.push(res)
            })
        }

        return result
    }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("birinchi", function cb1(x) { return x + 1 })
const sub2 = emitter.subscribe("birinchi", function cb2(x) { return x + 2 })
sub1.unsubscribe()
console.log(emitter.emit("birinchi", [5]))
// console.log([1, 2, 3].join(","))
