/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxNum = Math.max(...candies);
    const result = []
   

    candies.forEach(item => {
        result.push(item + extraCandies >= maxNum);
    })

    return result   
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies))