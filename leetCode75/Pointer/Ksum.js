var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let rigth = nums.length - 1;
    let count = 0;
    while (left < rigth) {
        const sum = nums[left] + nums[rigth];
        if (sum === k) {
            count++
            left++;
            rigth--
        }else if(sum<k){
            left++
        }else{
            rigth--
        }
    }
    return count
};

const nums = [2, 1, 3, 4];
const k = 5;
console.log(maxOperations(nums, k));  // Chiqish: 1
