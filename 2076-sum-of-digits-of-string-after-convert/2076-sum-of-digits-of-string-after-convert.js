/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
   const alphabets = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

 let convert = '';
 for(let i =0; i< s.length; i++){
   convert += (alphabets.indexOf(s[i])+1).toString()
 }
  
 const sumDigits = (str) => {
    return str.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  };

   let result = convert;
  for (let i = 0; i < k; i++) {
    result = sumDigits(result).toString();
  }

  return parseInt(result);
};