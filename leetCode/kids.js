/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const result = []
    for (let candie of candies) {
        let extra = candie + extraCandies;
        result.push(candies.every(item => item <= extra))
    }

    return result
};

const candies = [2, 3, 5, 1, 3]
const extraCandies = 3;

console.log(kidsWithCandies(candies , extraCandies))