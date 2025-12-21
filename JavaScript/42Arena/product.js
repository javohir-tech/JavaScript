function productExceptSelf(nums) {
    const result = [];
    // let count = nums[0]; // 1 2 3

    for (let i = 0; i < nums.length; i++) {
        const res = nums.filter((_, index) => index !== i)
        const item = res.reduce((acc, curr) => {
            return acc * curr
        }, 1)
       result.push(item)
    }
    return result
}

const nums = [1, 2, 3, 4]

console.log(productExceptSelf(nums))

module.exports = { productExceptSelf }