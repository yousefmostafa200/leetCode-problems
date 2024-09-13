/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let prefix = new Array(arr.length).fill(0);
    prefix[0] = arr[0];
    for(let i = 1; i< arr.length; i++){
        prefix[i] = prefix[i - 1] ^ arr[i]
    }

    let answer = new Array(queries.length);
    for(let i =0; i< queries.length; i++){
        let [left, right] = queries[i];
        if(left === 0){
            answer[i] = prefix[right]
        } else {
            answer[i] = prefix[right] ^ prefix[left - 1]
        }
    }

    return answer
};