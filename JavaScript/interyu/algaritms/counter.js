var createCounter = function (init) {
    let count = init
    return {
        increment: function () {
            count++
            return count
        },
        decrement: function () {
            count--
            return count
        },
        reset: function () {
            count = init
            return count
        }
    }
};

const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())