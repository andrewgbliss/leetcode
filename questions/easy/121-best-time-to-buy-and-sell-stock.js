
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// I first thought I could write a brute force n^2 for loop and go through every possibility but it was timing out
// So I go through the loop once O(n) but the space complexity is also O(n)
// I go through it once and find all the profits but getting a low and a high and finding the diff
// Then at the end just pick the max value

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = -1;
    let high = -1;
    let profits = [];
    for (let i = 0; i < prices.length; i++) {
        let l = prices[i];
        let r = i + 1 < prices.length ? prices[i+1] : 0;
        if (l >= r) {
            continue;
        }
        if (l < low || low === -1) {
            low = l;
            high = -1;
        }
        if (r > high || high === -1) {
            high = r;
        }
        if (low !== -1 && high !== -1) {
            profits.push(high - low);
        }
    }
    if (!profits.length) return 0;
    return Math.max(...profits);
};