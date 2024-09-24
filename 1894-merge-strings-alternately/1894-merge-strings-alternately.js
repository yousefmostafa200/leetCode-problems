/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let output = ''
    let n = word1.length;
    if ( n < word2.length )
        n = word2.length;

   for(let i =0; i < n ; i++){
    if(i < word1.length) output += word1[i]
    if(i < word2.length) output += word2[i]
   }

   return output
};