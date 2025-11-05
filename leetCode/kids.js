/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxCanie = Math.max(...candies);
    const result = [];

    for (let candie of candies) {
        result.push(candie+extraCandies >= maxCanie)
    }

    return result
};

const konfetlar = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log(kidsWithCandies(konfetlar, extraCandies))