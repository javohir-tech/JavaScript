/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            count++
            if (count >= n) return true
        }
    }

    return count >= n
};

const flowerbed = [0, 0, 1, 0, 1, 0, 0]
// [1, 0 , 0, 0, 1] n=1
const n = 2

console.log(canPlaceFlowers(flowerbed, n))