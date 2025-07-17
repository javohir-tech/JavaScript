/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result , nums[i])
    }

    return result
};

const nums = [1, 2, 3, 4];

const fn = (acc, curr) => {
    return acc + curr
}

const init = 0; 

console.log(reduce(nums , fn , init))