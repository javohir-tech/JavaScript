/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    const miniBed = flowerbed.slice(0, 3)
    let count = 0;
    let i = 1
    while (i < flowerbed.length - 2) {
        if (miniBed.every(item => item === 0)) {
            miniBed[miniBed.length - 2] = 1;
            count++
        }
        miniBed.shift();
        miniBed.push(flowerbed[i + 2]);
        console.log(miniBed)
        i++
    }
    return n === count
};

const flowerbed = [1, 0, 0, 0, 0, 0, 1], n = 2

console.log(canPlaceFlowers(flowerbed, n))