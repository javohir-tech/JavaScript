/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let WindowSum = 0;
    let sum = 0
    for (let i = 0; i < n + 2; i++) {
        WindowSum += flowerbed[i]
    }

    for (let i = n + 2; i < flowerbed.length; i++) {
        if (WindowSum !== 0) {
            sum++
        }

        WindowSum += flowerbed[i] - flowerbed[i - n + 2]
    }
    console.log(sum)
    return n === sum
};

const flowerbed = [1, 0, 0, 0, 0, 0, 1];
const n = 2;

console.log(canPlaceFlowers(flowerbed, n))