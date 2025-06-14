/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxLenght = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++
        }

        while (zeroCount > 1) {
            if(nums[left]===0){
                zeroCount--
            }
            left++
        }

        maxLenght = Math.max(maxLenght , right-left);
        right++
    }
    return maxLenght
};


const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(nums))

