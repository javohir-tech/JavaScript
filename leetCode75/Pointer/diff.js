/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const resNums1 = new Set(nums1);
    const resNums2 = new Set(nums2);

    const diff1 = [...resNums1].filter(x => !resNums2.has(x))
    const diff2 = [...resNums2].filter(x => !resNums1.has(x))
    return [diff1 , diff2]
};

const nums1 = [1, 2, 3]
const nums2 = [2, 4, 6]
console.log(findDifference(nums1, nums2))