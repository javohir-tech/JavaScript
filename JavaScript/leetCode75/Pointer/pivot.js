/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let num = 0;
    while (num < nums.length) {
        let sumLeft = 0
        let sumRigth = 0
        for (let i = 0; i < num; i++) {
            sumLeft += nums[i]
        }
        for (let i = nums.length-1; i > num; i--) {
            sumRigth+=nums[i]
        }
        if(sumLeft===sumRigth){
            return num
        }
        num++
    }
    return -1
};

const sonlar = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(sonlar))