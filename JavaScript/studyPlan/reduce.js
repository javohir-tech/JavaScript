/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {

    let val = init;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (fn() !== 0) {
            val = fn(val, nums[i])
        } else {
            val = 0
        }
    }

    return val;

};

let nums = [0];
const init = 25

function sum(accum, curr) {
    return accum + curr
}

function sum(accum, curr) {
    return accum + curr * curr
}

function sum(accum, curr) {
    return 0
}

console.log(reduce(nums, sum, init))