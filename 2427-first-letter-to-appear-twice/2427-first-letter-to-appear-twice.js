/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const letterCounts = [];
    for(let char of s){
        if(letterCounts.includes(char)) return char
        else letterCounts.push(char)
    }
};