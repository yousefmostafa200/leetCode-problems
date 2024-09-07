/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++
        }
    }
    let right = arr.length - 1;
    let left = arr.length + zeros - 1;

    while ( right >= 0 && left >= 0) {
        // arr = [1,0,2,3,0,4,5,0]
        // arr = [1,0,2,3,0,4,5,0 ,0 ,0 ,0]
        if(arr[right] !== 0) {
            if(left < arr.length){
                arr[left] = arr[right]
            }
            left--;
        } else {
            if(left < arr.length){
                arr[left] = 0
            }
            left--
            if(left < arr.length){
                arr[left] = 0
            }
            left--
        }
        right--

    }

};