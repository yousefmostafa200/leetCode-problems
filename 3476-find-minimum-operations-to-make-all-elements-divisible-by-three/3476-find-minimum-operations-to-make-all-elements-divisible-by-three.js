/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let r1 =0, r2=0;

    for(let num of nums){
        if(num %3 === 1) r1++
        else if(num %3 === 2) r2++
    }

    return r1+ r2
};