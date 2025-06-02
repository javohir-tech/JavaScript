function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const heightMin = Math.min(height[left], height[right]);
    const width = right - left;
    const area = heightMin * width;
    maxArea = Math.max(maxArea, area);

    // Kichikroq balandlikni ichkariga siljitamiz
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Misollar
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));               // 1
