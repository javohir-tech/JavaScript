/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const result = [];
    nums.forEach((item, index) => {
        const newArr = [...nums]
        newArr.splice(index, 1)
        console.log(newArr)
        let res = 1;
        for (let i = 0; i < newArr.length; i++) {
            res *= newArr[i]
        }
        result.push(res)
    })
    return result
};

const nums = [0 , 0];
console.log(productExceptSelf(nums))