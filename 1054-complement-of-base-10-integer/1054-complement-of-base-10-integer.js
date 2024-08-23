/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    const binary = n.toString(2)
    let res = ''
    for(let i =0; i< binary.length; i++){
      res +=  binary[i] === '0' ? '1' : '0'
    }

    return parseInt(res, 2)
};