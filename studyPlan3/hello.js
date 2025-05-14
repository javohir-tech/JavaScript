/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

const f = createHelloWorld()
console.log(f([5]))
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */