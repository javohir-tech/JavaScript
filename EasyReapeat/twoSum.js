/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [3,2,4]
const target = 6

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(nums, target))
