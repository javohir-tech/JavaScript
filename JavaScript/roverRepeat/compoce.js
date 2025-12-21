/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        return functions.reduceRight((acc, curr) => {
           return curr(acc)
        } ,  x)
    }
};


const fn = compose([x => x + 1, x => x * x, x => 2 * x]);

const x = 4;

console.log(fn(x))
