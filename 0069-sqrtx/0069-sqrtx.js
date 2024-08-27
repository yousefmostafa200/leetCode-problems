/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 1, right = x, res = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(mid * mid === x){
            return mid
        } else if(mid * mid < x){
            left = mid +1;
            res = mid;
        } else {
            right = mid -1;
        }
    }

    return Math.floor(res)
};
