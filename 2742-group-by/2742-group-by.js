/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, cur) => {
        const key = fn(cur);
        if(!grouped[key]) grouped[key] = []
        grouped[key].push(cur);

            return grouped
    },{})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */