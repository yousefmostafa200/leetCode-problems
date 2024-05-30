/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(str) {
    const charsCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if(charsCount[char]){
        charsCount[char]++;
    } else {

    charsCount[char] = 1
    }
  }
   for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if(charsCount[char] === 1) return i
  }

  return -1;
};