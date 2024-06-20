/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const nums2 = nums.slice(0);
    return [...nums,...nums2]
};