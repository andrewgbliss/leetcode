// O(n ^ 2)

// In Big O notation, we express the time complexity as O(n^2), where "n" represents the length of the nums array.
// This is a quadratic time complexity, which means that the execution time increases with the square of the input size.
// For large arrays, this can be inefficient.

// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
