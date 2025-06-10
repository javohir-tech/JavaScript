/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let i = k;
    let j = 0;
    let result = 0;
    while (nums.length >= i) {
        const newArr = nums.slice(j, i);
        const sum = newArr.reduce((acc, curr) => {
            return acc + curr
        }, 0)
        if (sum > result) {
            result=sum
        }
        i++
        j++
    }
    return result/k
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k))