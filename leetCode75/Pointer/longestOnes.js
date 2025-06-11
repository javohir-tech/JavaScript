/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 0) count++;
            if (count > k) break;
            max = Math.max(max, j - i + 1)
        }
    }
    return max
};

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const k = 2
console.log(longestOnes(nums, k))