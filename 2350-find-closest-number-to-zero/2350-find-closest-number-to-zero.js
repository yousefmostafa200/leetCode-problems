/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest = nums[0];
    for(let i = 1; i < nums.length; i++){
        let current = nums[i];
        let closestDistance = Math.abs(closest);
        let currenttDistance = Math.abs(current);

        if(currenttDistance < closestDistance){
            closest = current;
        } else if(currenttDistance === closestDistance){
            if(current > closest){
                closest = current
            }
        }
    }

    return closest
};