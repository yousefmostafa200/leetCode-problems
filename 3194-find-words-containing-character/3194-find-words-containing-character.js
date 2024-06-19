/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    return words.map((word,index) => {
        if(word.includes(x)){
            return index;
        } else {
            return -1;
        }
    }).filter((idx) => idx !== -1)
};