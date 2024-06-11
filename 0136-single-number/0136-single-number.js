/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
     const countNums = {};

  for (let i = 0; i < nums.length; i++) {
    if (!countNums[nums[i]]) {
      countNums[nums[i]] = 1;
    } else {
      countNums[nums[i]]++;
    }
  }

  for (let num in countNums) {
    if (countNums[num] === 1) {
      return num;
    }
  }
};