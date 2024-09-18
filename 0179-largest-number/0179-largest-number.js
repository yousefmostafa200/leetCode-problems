/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String)
    nums.sort((a,b) => (b + a) - (a + b))

    let res = nums.join('')

    return res[0] === '0' ? '0' : res;

};