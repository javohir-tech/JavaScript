/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const n = nums.length;
    const result = new Array(n).fill(0);

    let prefix = 0;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix += nums[i]
    }
    // console.log(result)
    let suffix = 0;
    for (let i = n - 1; i >= 0; i--) {
        result[i] += suffix ;
        suffix += nums[i]
    }

    return result
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums))