/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = Array.from({length: nums.length}, () => 1);
    let leftProducts =1;
    let rightProducts =1;

    for(let i=0; i< nums.length; i++){
         answer[i] = leftProducts;
         leftProducts *= nums[i]  
    }
    for(let i=nums.length -1; i >= 0; i--){
         answer[i] *= rightProducts;
         rightProducts *= nums[i]  
    }
    
    return answer
};