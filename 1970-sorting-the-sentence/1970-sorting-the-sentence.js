/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    const words = s.split(' ');
    let arr = new Array(words.length)
    for (let word of words) {
        let pos =word[word.length - 1]
        arr[pos - 1] = word.slice(0, -1)
    }

    return arr.join(' ')
};