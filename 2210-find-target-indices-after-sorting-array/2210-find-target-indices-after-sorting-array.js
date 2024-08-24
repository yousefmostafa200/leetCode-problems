/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    const sorted = nums.sort((a, b) => a - b);
   
    const res =[]

   for(let i =0; i< sorted.length; i++){
    if(sorted[i] === target) res.push(i)
   }

    return res;
};