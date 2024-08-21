/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;

    const seenChars = new Map()
    let left =0 ,  longest =0;

    for(let right = 0; right < s.length; right++){
        const currChar = s[right];
        const prevSeenChars = seenChars.get(currChar);
        if(prevSeenChars >= left){
          left =  prevSeenChars  + 1
        }
        seenChars.set(currChar, right);
        longest = Math.max(longest, right - left + 1)
    }
    return longest
};