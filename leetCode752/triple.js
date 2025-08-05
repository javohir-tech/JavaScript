/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let first = nums[i]
        for (let j = i + 1; j < 3; j++) {
            if (nums[j] > first) {
                // console.log(first)
                first = nums[j]
                count += 1
                console.log(true)
                // return true
            }
            // console.log(count)
            console.log(j)
        }
        console.log("salom")
        count = 0
    }

    return false

};

const nums = [2, 4, -2, -3];
console.log(increasingTriplet(nums))