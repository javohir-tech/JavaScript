/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
      return  functions.reduceRight((acc, fn) => fn(acc), x)
    }
};

const functions = [x => x + 1, x => x * 2];
const fn = compose(functions)
console.log(fn(4))

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */