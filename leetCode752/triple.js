/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let boshlangich = nums[0];
    let result = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > boshlangich) {
            result.push(boshlangich);
            // boshlangich = nums[i];
            console.log(result)
        } else if (nums[i] < boshlangich) {
            result = []
        }
        boshlangich = nums[i]
        // console.log(boshlangich)
    }
    return result
};

const nums = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(nums))