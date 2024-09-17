/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const wordsCount = new Map();
    const words = s1.split(' ').concat(s2.split(' '));


    for (let word of words) {
        wordsCount.set(word, (wordsCount.get(word) || 0) + 1)
    }
  

    const res = []
    for(let [word, count] of wordsCount.entries()){
        if(count === 1){
            res.push(word)
        }
    }

    return res
};