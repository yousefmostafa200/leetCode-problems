/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const freq = new Map();
    for(let num of nums){
        // freq.set(num, (freq.get(num) || 0) + 1)
        freq.has(num) ? freq.delete(num) : freq.set(num, true)
    }
  return freq.size === 0;
};