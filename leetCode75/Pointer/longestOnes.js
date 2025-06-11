/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) k--;

        if (k < 0) {
            if (nums[left]) k++;
            left++
        }
    }
    return nums.length - left
};

const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
const k = 3;
console.log(longestOnes(nums, k))