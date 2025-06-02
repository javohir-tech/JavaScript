/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0;
    let left = 0;
    let rigth = nums.length;
    while (left < nums.length) {
        if (nums[left] + nums[rigth] === k) {
            nums.splice(rigth , 1)
            nums.splice(left , 1)
        }else{

        }
    }
};

const nums = [1, 2, 3, 4]
const k = 5
console.log(maxOperations(nums, k))