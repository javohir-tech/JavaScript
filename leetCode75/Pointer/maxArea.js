function maxArea(height) {
    let maxArea = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i)
            maxArea = Math.max(area, maxArea)
        }
    }
    return maxArea
}

// Misollar
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1]));
Array.length               // 1
