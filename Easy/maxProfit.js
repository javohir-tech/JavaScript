function maxProfit(narxlar) {
    let minNarx = narxlar[0];
    let maxNarx = 0

    for (let i = 0; i < narxlar.length; i++) {
        if (narxlar[i] < minNarx) {
            minNarx = narxlar[i]
        } else {
            let profit = narxlar[i] - minNarx;

            if (profit > maxNarx) {
                maxNarx = profit
            }
        }
    }

    return maxNarx
}

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))