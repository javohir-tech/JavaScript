class EventEmitter {
    constructor() {
        this.result = {}
    }

    subscribe(eventName, callBack) {
        if (!this.result[eventName]) {
            this.result[eventName] = []
        }

        const callbacks = this.result[eventName];
        callbacks.push(callBack)

        const unsubscribe = () => {
            const index = callbacks.indexOf(callBack);

            if (index !== -1) {
                callbacks.splice(index, 1)
            }
            return undefined
        }

        return {unsubscribe}

    }

    emit(eventName, args = []) {
        const callbacks = this.result[eventName];

        if (!callbacks) return [];

        return callbacks.map(func => func(...args))
    }
}

const emit = new EventEmitter();

const sub1 = emit.subscribe('javohir', x => x + 2);
const sub2 = emit.subscribe('javohir', x => x + 1);

sub1.unsubscribe();

console.log(emit.emit('javohir', [4]))