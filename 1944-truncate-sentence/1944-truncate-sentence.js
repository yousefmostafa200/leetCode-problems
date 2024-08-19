/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // const words = s.split(' ');
    return s.split(' ').slice(0,k).join(' ')
};