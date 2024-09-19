/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // prices = [7,1,5,3,6,4]
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < buyPrice){
            buyPrice  = prices[i]
        }

        profit = Math.max(profit, prices[i] - buyPrice)
    }
   
   return profit
};