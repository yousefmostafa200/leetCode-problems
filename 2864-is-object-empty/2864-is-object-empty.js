/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof obj === 'object'){
         return Object.keys(obj).length === 0;
    } else{
        obj.keys===0
    }
};