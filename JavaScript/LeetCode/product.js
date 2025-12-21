/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const newArr = [...nums]
        newArr.splice(i, 1);
        const res = newArr.reduce((acc, curr)=> acc*curr , 1)
        result.push(res)
    }
    return result 
};

const raqamlar = [1, 2, 3, 4];

console.log(productExceptSelf(raqamlar))
