/**
 * 卖股票的额最佳时机 
 * 一次遍历
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 10000;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }

    return max;
};