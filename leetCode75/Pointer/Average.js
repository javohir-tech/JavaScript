/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const preficSum = [0];

    for (let i = 0; i < nums.length; i++) {
        preficSum.push(preficSum[i] + nums[i])
    }

    let maxSum = -Infinity;

    for (let i = 0; i < nums.length - k; i++) {
        const sum = preficSum[k + i] - preficSum[i];
        maxSum = Math.max(maxSum, sum / k)
    }
    return maxSum;
};


const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k))