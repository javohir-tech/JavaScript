/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // const clone =  grid.flat(1)
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        let item = grid[i];
        for (let i = 0; i < grid.length; i++) {
            let hashiras = grid.map(item => item[i])
            if (JSON.stringify(item) === JSON.stringify(hashiras)) {
                count++
            }
        }
    }
    return count
};

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
console.log(equalPairs(grid))