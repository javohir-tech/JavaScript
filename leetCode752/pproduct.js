/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const result = [];
    nums.forEach(item => {
        const newArr = nums.filter(num => num !== item);
        let res = 1;
        for (let i = 0; i < newArr.length; i++) {
            res *= newArr[i]
        }
        result.push(res)
    })
    return result
};

const nums = [0];
console.log(productExceptSelf(nums))