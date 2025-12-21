/**
 * @return {Function}
 */
var createHelloWorld = function () {

    return function (...args) {
        return "Hello World"
    }
};
let args = [1]
const f = createHelloWorld()
console.log(f(...args))

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */