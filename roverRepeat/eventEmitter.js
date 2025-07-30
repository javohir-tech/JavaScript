class EventEmitter {

    subscribe(eventName, callBack) {
        return {
            unsubscribe: () => {

            }
        };

    }

    emit(eventName, args = []) {

    }
}