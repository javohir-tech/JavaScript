function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const maxHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = maxHeight * width;
        maxArea = Math.max(area, maxArea);

        if (height[right] < height[left]) {
            right--
        } else {
            left++
        }
    }

    return maxArea
}

// Misollar
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1]));
Array.length               // 1
