function rotate(nums, k) {
    for (let i = 0; i < k;  i++){
        let oxirgi = nums.pop()
        nums.unshift(oxirgi)
    }
    console.log(nums)
}

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3
rotate(nums, k)
// console.log(nums)

