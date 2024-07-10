/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;

    // while(n % 3 === 0){
    //     n /= 3;
    // }

    // return n === 1;
const log3n  = Math.log10(n) / Math.log10(3)


    return Math.floor(log3n) === log3n

};