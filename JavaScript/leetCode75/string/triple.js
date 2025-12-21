/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let birinchi = Infinity;
    let ikkinchi = Infinity;

    for (let num of nums) {
        if (num <= birinchi) {
            birinchi = num
        } else if (num <= ikkinchi) {
            ikkinchi = num
        } else {
            return true
        }
    }

    return false
};

const nums = [2, 1, 5, 0, 4, 6];

console.log(increasingTriplet(nums))