/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let a = Infinity;
    let b = Infinity;

    for (let num of nums) {
        if (num <= a) {
            a=  num;
        } else if (num <= b) {
            b = num
        } else {
            return true
        }
    }

    return false
};

const nums = [2, 1, 5, 0, 4, 6];

console.log(increasingTriplet(nums))