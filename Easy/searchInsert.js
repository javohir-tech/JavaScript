/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
};

const nums = [1, 3, 5, 6]
console.log(nums.sort())
const target = 5
console.log(searchInsert(nums, target))