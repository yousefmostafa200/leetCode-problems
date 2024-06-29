/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.trim().split(/\s+/);
    let result =[]
    for(let i = words.length-1; i>=0; i--){
        result.push(words[i])
    }
    return result.join(' ');
};