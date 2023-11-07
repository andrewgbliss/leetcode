// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Brute force scanning of array - scans every possible value
// O(n ^ 2)
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

// O(n)
// Memory O(n)

// We will use a dictionary of comps (compliment numbers)

// [2, 7, 3, 5], 9

// comp = base - index
// Is this comp in the dictionary? It is so then we return the comp and the current index.
// If not the store the index in the comps dictionary

// comp = 9 - 2 = 7
// Is 7 in the dictionary? No, so add it to the dictionary
// comps = { 7: 0 }

// comp = 9 - 7 = 2
// Is 2 in the dictionary? yes, so return [{ 7: 0 }, index = 1] so [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const comps = {};
  for (var i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (comps[comp] != null) {
      return [comps[comp], i];
    } else {
      comps[nums[i]] = i;
    }
  }
};
