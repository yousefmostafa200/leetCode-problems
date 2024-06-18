/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   let X = 0;
    
    for (let operation of operations) {
        if (operation === "++X" || operation === "X++") {
            X++;
        } else if (operation === "--X" || operation === "X--") {
            X--;
        }
    }
    
    return X;
};