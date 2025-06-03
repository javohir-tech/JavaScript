var maxOperations = function (nums, k) {
    let count = 0;
    const map = new Map();
    for (let num of nums) {
        const diff = k - num;
        if (map.get(diff) > 0) {
            count++
            map.set(diff , map.get(diff)-1)
        }else{
            map.set(num , (map.get(num)|| 0) +1)
        }
    }
    return count
};

const nums = [2, 1, 3, 4];
const k = 5;
console.log(maxOperations(nums, k));  // Chiqish: 1
