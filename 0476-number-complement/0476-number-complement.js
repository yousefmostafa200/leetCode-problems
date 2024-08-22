/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = num.toString(2);
    let res = ''

    for(let i =0; i< binary.length; i++){
        res += binary[i] === '0' ? '1' : '0'
    }

    return parseInt(res, 2)
};