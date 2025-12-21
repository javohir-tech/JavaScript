/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    const balandlik = [0];
    for(let i=0 ; i<gain.length ; i++){
       balandlik.push(balandlik[i]+gain[i])
    }
    return Math.max(...balandlik)
};

const daromad = [-5, 1, 5, 0, -7];
console.log(largestAltitude(daromad))