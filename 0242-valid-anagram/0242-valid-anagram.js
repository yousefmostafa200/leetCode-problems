/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const sCounts ={} 
    const tCounts ={}

    for(let i =0; i< s.length;i++){
        sCounts[s[i]] = (sCounts[s[i]] || 0 )+1;
        tCounts[t[i]] = (tCounts[t[i]] || 0 )+1;
    } 

    for(const key in sCounts){
        if(sCounts[key] !== tCounts[key]) return false;
    }

return true


};