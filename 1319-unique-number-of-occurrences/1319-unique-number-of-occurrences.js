/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   const countMap = {};
    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    const occurrenceSet = new Set();
    for (const count in countMap) {
        if (occurrenceSet.has(countMap[count])) {
            return false; 
        }
        occurrenceSet.add(countMap[count]);
    }

    return true;
};