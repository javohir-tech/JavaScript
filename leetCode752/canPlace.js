/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let bug = []
    let sum = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] !== 0) {
            bug = []
        } else {
            bug.push(flowerbed[i])
            if (bug.length === 3){
                bug = [0];
                sum++
            }
        }
    }
    return sum===n
};

const flowerbed = [0,0,1,0,1];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n))