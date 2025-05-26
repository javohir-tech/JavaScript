/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = [];
    for (const item of nums) {
        const maqullangan = nums.filter(a => a !== item);
        console.log(maqullangan)
        const sum = maqullangan.reduce((acc, curr) => {
            return acc * curr
        }, 1)
        result.push(sum)
    }
    return result
};
const nums = [0, 0]
console.log(productExceptSelf(nums))