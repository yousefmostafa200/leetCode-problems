/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let counter = 0;
  let len = nums.length;

    for(let i=0; i< len; i++){
        for(let j = i + 1; j < len; j++){
            if(nums[i] + nums[j] < target) {
                counter++;
            }
        }
    } 

    return counter; 
};