/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
     const sorted = arr.slice().sort((a,b) => a - b); // [10,20,30,40]
    const map = new Map();
    let rank = 1;
    for(let i =0; i< sorted.length; i++){
        if(!map.get(sorted[i])){
         map.set(sorted[i], rank)
         rank++
        }
    }
    const res = []
    for(let i =0; i< arr.length; i++){
       res.push(map.get(arr[i]))
    }

    return res
};


/*
   {
      10 : i + 1,

   }
*/ 