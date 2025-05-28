/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let noneZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[noneZero] = nums[i];
            noneZero++
        }
    }
    // console.log(nums)
    for (let i = noneZero; i < nums.length; i++) {
        nums[i] = 0
    }
};

const raqamlar = [0, 1, 0, 3, 12]
moveZeroes(raqamlar)
console.log(raqamlar)