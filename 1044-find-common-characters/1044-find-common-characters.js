/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let firstCount = Array(26).fill(0);
    for(let char of words[0]){
        firstCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i =1;i < words.length; i++){
        let currentCount = Array(26).fill(0);
        for(let char of words[i]){
            currentCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for(let j =0; j < 26; j++){
             firstCount[j] = Math.min(firstCount[j], currentCount[j]);
        }
    }

    let res =[];
    for(let i =0; i< 26;i++){
        while(firstCount[i] > 0){
            res.push(String.fromCharCode(i + 'a'.charCodeAt(0)))
            firstCount[i]--;;
        }
    }

    return res
};