/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
    if (heights.length < 2) return 0;

    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        const height = Math.min(heights[left], heights[right]);
        const width = right - left;
        const area = height * width;
        maxArea = Math.max(maxArea, area);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};