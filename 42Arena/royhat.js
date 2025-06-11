function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        const end = nums.pop()
        nums.unshift(end)
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
rotate(nums, k)
console.log(nums)
// module.exports = {rotate}