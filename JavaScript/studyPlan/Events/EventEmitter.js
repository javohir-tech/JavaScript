class EventEmitter {
    constructor() {
        this.event = {}
    }

    subscribe(eventName, callback) {
        if (!this.event[eventName]) {
            this.event[eventName] = []
        }

        const callbacks = this.event[eventName];
        callbacks.push(callback);

        const unsubscribe = () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        }
        return { unsubscribe }
    }

    emit(eventName, args = []) {
        const callbacks = this.event[eventName];

        if (!callbacks) return [];

        return callbacks.map(item => item(...args))
    }
};

const emitter = new EventEmitter();

const sub1 = emitter.subscribe('javohir', x => x + 1);
const sub3 = emitter.subscribe('suvonov', x => x + 10);
const sub2 = emitter.subscribe('javohir', function (x) {
    return x + 3
})

sub3.unsubscribe()

console.log(emitter.emit('javohir', [5]))
console.log(emitter.emit('suvonov', [5]))

