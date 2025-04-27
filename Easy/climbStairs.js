/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let birinchi = 1; // 1 3
    let ikkinchi = 2; // 2 1 
    let current = 0

    for(let i=3; i<=n; i++){
        current = birinchi + ikkinchi;
        birinchi = ikkinchi;
        ikkinchi= current
    }

    return current
};

console.log(climbStairs(4))