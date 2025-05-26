/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const res = []
    for(let i=0 ; i<candies.length ;  i++){
        res.push(candies[i] + extraCandies >=  maxCandies)
    }
    return res
};

const candies = [2,3,5,1,3]
const extraCandies = 3

console.log(kidsWithCandies(candies, extraCandies))