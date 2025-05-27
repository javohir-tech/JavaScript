/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const natija = Array(n).fill(1);

    let oldingi = 1;
    for (let i = 0; i < n; i++) {
        natija[i] = oldingi;
        oldingi *= nums[i]
    }
    let keyingi = 1;
    for (let i = n - 1; i >= 0; i--) {
        natija[i] = keyingi ;
        keyingi*=  nums[i]
    }
    return natija
};
const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))