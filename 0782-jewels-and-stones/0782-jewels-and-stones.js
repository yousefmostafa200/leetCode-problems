/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let counter = 0;

    for(stone of stones){
        if(jewels.includes(stone)){
            counter++;
        }
    }

    return counter
};