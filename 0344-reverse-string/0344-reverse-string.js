/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
 let left = 0;
 let right = str.length - 1;

 while(right > left){
    [str[left],str[right]] = [str[right], str[left]];
    left++;
    right--;
 }
};