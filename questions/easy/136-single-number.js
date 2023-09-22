// https://leetcode.com/problems/single-number/description/

// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


// First attempt

// Time = O(n)
// Space = O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const lookup = {};
    for (let i = 0; i < nums.length; i++) {
        if (!lookup[nums[i]]) {
            lookup[nums[i]] = 1
            continue;
        }
        lookup[nums[i]]++;
    }
    let singleNumber = 0;
    Object.keys(lookup).forEach((key) => {
        if (lookup[key] === 1) {
            singleNumber = key;
        }
    });
    return singleNumber;
};

// Time = O(n)
// Space = O(1) - No extra space

// Uses XOR to get rid of dupes

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};