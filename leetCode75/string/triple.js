/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let count = 0;

    for (let i = 0; i < nums.length-1 ; i++) {
        if (nums[i] < nums[i + 1]) {
            count ++;
            console.log(count , "+")
            if (count === 3) {
                return true
            }
        } else {
            count = 1
            console.log(count , "-")
        }
    }
    return false
};

const nums = [2,1,5,0,4,6];

console.log(increasingTriplet(nums))