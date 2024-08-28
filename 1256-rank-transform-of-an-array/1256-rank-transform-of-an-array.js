/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    

    const sorted = arr.slice().sort((a,b) => a - b); // [10,20,30,40]
    const obj = {};
    let rank = 1;
    for(let i =0; i< sorted.length; i++){
        if(!obj[sorted[i]]){
         obj[sorted[i]] = rank;
         rank++
        }
    }

    const res = []
    for(let i =0; i< arr.length; i++){
       res.push(obj[arr[i]])
    }

    return res
};


/*
   {
      10 : i + 1,

   }
*/ 