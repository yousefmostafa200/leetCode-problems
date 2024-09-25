/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+ str2 !== str2+str1) return '';

    let n1 = str1.length;
    let n2 = str2.length;

    while(n2) {
        let temp = n2;
        n2 = n1 % n2;
        n1 = temp
    }

    return str1.substring(0, n1)

};