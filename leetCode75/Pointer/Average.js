/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const prefixSum = [0];

    for (let i = 0; i < nums.length; i++) {
        prefixSum.push(prefixSum[i] + nums[i])
    }

    let maxSum = -Infinity;

    for (let i = 0; i <= nums.length-k; i++) {
        const sum = prefixSum[i + k] - prefixSum[i];
        maxSum = Math.max(maxSum, sum / k)
    }
    return maxSum
};


const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k))