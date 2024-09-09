/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const freq = new Map();
    for(let num of nums){
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    for(let count of freq.values()){
        if(count % 2 !== 0) return false
    }


   return true 
};