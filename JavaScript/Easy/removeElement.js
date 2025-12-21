/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const arr = nums.filter(a => a !== val)
    return [arr.length , arr]
};

const nums = [3,2,2,3];
const val= 3;
console.log(removeElement(nums, val))