/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let newArr = [];
        for (let j = i; j < nums.length; j++) {
            newArr.push(nums[j]);
            if (nums[j] === 0) count++;
            if (count === k) {
                max = Math.max(max, newArr.length)
            }
        }
        console.log(newArr)
    }
    return max
};

const nums = [1,1,1,0,0,0,1,1,1,1,0]
const k = 2
console.log(longestOnes(nums, k))