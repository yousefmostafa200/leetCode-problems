/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    const nums = {};
  for (let i =0; i<= arr.length; i++) {
    const match = target - arr[i];
    if (match in nums) {
      return [nums[match], i];
    }
    nums[arr[i]] = i;
  }

  return [];
};