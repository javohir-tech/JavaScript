/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    if(args.length === 0) return 0
    let leng = 0;
    for (let i = 0; i < args.length; i++) {
        leng++
    }
    return leng
};

console.log(argumentsLength(5, 2))

/**
 * argumentsLength(1, 2, 3); // 3
 */