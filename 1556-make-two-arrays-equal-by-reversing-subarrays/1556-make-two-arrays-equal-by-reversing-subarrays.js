/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const targetCount={}
    const arrCount={}

    for(let num of target){
        if(!targetCount[num]) {
            targetCount[num] = 0;
        } 
        targetCount[num]++
    }

    for(let num of arr){
         if(!arrCount[num]) {
            arrCount[num] = 0;
        } 
        arrCount[num]++
    }

    for(let num in targetCount){
        if(targetCount[num] !== arrCount[num]){
            return false;
        }
    }

    return true
};