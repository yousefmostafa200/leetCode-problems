/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const freq = {}
    for(let str of arr){
        freq[str] = (freq[str] || 0) + 1;
    }
    const distinct = [];
    for(let str of arr){
        if(freq[str] === 1) distinct.push(str)
    }
   
    return distinct.length >= k ?  distinct[k-1] :''
    
};