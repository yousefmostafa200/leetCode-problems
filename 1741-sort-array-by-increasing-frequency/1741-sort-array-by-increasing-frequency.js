/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freq ={};
    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1;
    }

    return nums.sort((a,b) => {
        if(freq[a] === freq[b]){
           return   b - a;
        } else {
           return freq[a] - freq[b]
        }
    })
};