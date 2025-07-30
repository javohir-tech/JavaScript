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
        console.log(this.events)
        return {
            unsubscribe: () => {
                this.events.delete(eventName)
                console.log(this.events)
            }
        };

    }

    emit(eventName, args = []) {
        this.events.get(eventName).forEach(func => {
            func(args)
        })

        console.log(this.events)
    }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("birinchi", function cb1(...args) { return args.join(",") })
const sub2 = emitter.subscribe("birinchi", function cb2(...args) { return args.join(",,") })
// sub1.unsubscribe()
emitter.emit("birinchi", [1, 2, 3])
console.log([1, 2, 3].join(","))
