/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let difference = 0;

    for(let i =0 ; i< s.length ; i++){
        difference  += Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]))

       
    }

    return difference
    
};