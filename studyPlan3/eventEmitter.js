class EventEmitter {
    constructor() {
        this.results = {}
    }
    subscribe(eventName, callback) {
        if (!this.results[eventName]) {
            this.results[eventName] = [];
        }
        const callbacks = this.results[eventName];
        callbacks.push(callback)
        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1)
                }
            }
        };
    }

    emit(eventName, args = []) {
        const callbacks = this.results[eventName];

        if (!callbacks) return [];

        return callbacks.map(item => item(...args))
    }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe('javohir', () => 5);
// sub1.unsubscribe()
const sub2 = emitter.subscribe('javohir', () => 6);
console.log(emitter.emit('javohir', [5]));

