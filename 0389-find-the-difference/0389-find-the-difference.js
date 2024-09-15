/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const sMap = new Map()
    const tMap = new Map()

    for (let char of s) {
        sMap.set(char, (sMap.get(char) || 0) + 1)
    }

    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1)
    }

    for (let [char, count] of tMap) {
        if (count !== sMap.get(char)){
            return char
        }
    }

};