/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>target){
            return i;
        }
    }

    return nums.length

};

const nums = [1, 3, 5, 6]
const target = 4
console.log(searchInsert(nums, target))