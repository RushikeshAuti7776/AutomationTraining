// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy
// before you sell.

// You are given an array prices where prices[i] is the price of a given stock on the i
// th day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve
// any profit, return 0.

let prices : number [] = [7,1,5,3,6,4]

  let minPrice : number = 0;
  let maxProfit1 : number= 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // Update the lowest price
    } else if (price - minPrice > maxProfit1) {
      maxProfit1 = price - minPrice; // Update the best profit
    }
  }
  console.log(minPrice);
  console.log(maxProfit1);

console.log("-----------------------")

