/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU'
    const chars = s.split('');
    let i = 0;
    let j = chars.length - 1

    while(i < j){
        if(!vowels.includes(chars[i])) i++
        else if (!vowels.includes(chars[j])) j--
        else {
            [chars[i], chars[j]] = [chars[j], chars[i]]
            i++;
            j--;
        }
    } 

    return chars.join('')
};