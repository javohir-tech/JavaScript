/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[current] = nums[i]
            current++
        }
    }

    return current
};

const nums = [0,1,2,2,3,0,4,2]
const val = 2;
const k = removeElement(nums, val)
console.log(k)
console.log(nums.slice(0, k))