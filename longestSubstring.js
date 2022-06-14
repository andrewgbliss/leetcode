// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	var arr = [];
	var longest = 0;
	for (var i = 0; i < s.length; i++) {
		var c = s[i];
		arr.push(c);
		for (var j = i + 1; j < s.length; j++) {
			var c2 = s[j];
			if (arr.indexOf(c2) == -1) {
				arr.push(c2);
			} else {
				break;
			}
		}
		if (arr.length > longest) {
			longest = arr.length;
		}
		arr = [];
	}
	return longest;
};