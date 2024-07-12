/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    const numSet = new Set(nums);
    let k = -1;

    for(let num of nums){
        if(numSet.has(-num)){
            k = Math.max(k, Math.abs(-num))
        }
    }

    return k;
};