/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxHeight = height[0];
    let length = 0
    let result = 1;
    for (let i = 1; i < height.length; i++) {
        if (maxHeight - height[i] >= 0) {
            length++
            result = length * height[i]
        } else {
            maxHeight = height[i]
        }
    }
    return result
};

const height = [1, 2, 1]  //49
console.log(maxArea(height))