/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        const prev = flowerbed[i - 1] ?? 0;
        const curr = flowerbed[i];
        const next = flowerbed[i + 1] ?? 0;

        if (prev === 0 && curr === 0 && next === 0) {
            flowerbed[i] = 1;
            count++;
            if (count >= n) return true
        }
    }
    return false
};

const flowerbed = [0, 0, 1, 0, 1];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n))