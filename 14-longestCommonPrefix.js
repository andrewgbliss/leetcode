// https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
	var prefix = "";
	
	for (var i = 0; i < strs[0].length; i++) {
			var val = true;
			for (var j = 1; j < strs.length; j++) {
					if (strs[0].slice(0, i + 1) !== strs[j].slice(0, i + 1)) {
							val = false;
					}
			}
			if (val) {
					prefix = strs[0].slice(0, i + 1);
			}
	}
	
	return prefix;
};