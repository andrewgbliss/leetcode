// https://leetcode.com/problems/climbing-stairs/description/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:

// 1 <= n <= 45

// Tricks - write out the results you can see a pattern like fibonacci. 

// var fib = function(n) {
// 	if (n <= 1) return n;
// 	return fib(n - 1) + fib(n - 2);
// };

// With n being 2 or 3 we have our base case of returning the result.

// Since dealing with large numbers we can use memoization to store previous results
// so we dont have to calculate them again.

var memo = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;
    if (memo[n]) {
        return memo[n];
    }
	var result = climbStairs(n - 1) + climbStairs(n - 2);
    memo[n] = result;
    return result;
};