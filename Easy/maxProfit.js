/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice){
            minPrice = prices[i]
        }else{
            let profit = prices[i]-minPrice;
            if(profit>maxProfit){
                maxProfit = profit
            }
        }
    }

    return maxProfit
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices))