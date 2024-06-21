/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const numsCount = {};
    let goodPairs = 0;

    nums.forEach((num) => {
        if(numsCount[num]){
            goodPairs += numsCount[num];
             numsCount[num]++;
        } else{
            numsCount[num] = 1;
        }
    })

    return goodPairs;

};