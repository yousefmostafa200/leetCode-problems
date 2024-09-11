/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let res = 0;
    let n = start ^ goal;
    while(n){
        res += n & 1;
        n = n >> 1
    }
    return res
};