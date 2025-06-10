/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    return Math.max(
        ...nums.map((_, i) =>
            i <= nums.length - k
                ? nums.slice(i, i + k).reduce((a, b) => a + b) / k
                : 
                -Infinity
        )
    )
};


const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k))