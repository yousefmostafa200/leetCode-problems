/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const combined ={};

    function addOrMerge(obj){
        if(combined[obj.id]){
            combined[obj.id] = {...combined[obj.id], ...obj}
        } else {
            combined[obj.id] = obj
        }
    }

    arr1.forEach(addOrMerge)
    arr2.forEach(addOrMerge)

    return Object.values(combined).sort((a,b) => a.id - b.id)
};