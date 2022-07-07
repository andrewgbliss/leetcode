// https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
	var res = "";
	var resLen = 0;
	
	for (var i = 0; i < s.length; i++) {
			var l = i;
			var r = i;
			
			while (l >= 0 && r < s.length && s[l] === s[r]) {
					if (r - l + 1 > resLen) {
							res = s.slice(l, r + 1);
							resLen = r - l + 1;
					}
					l -= 1;
					r += 1;
			}
			
			l = i;
			r = i + 1;
			
			while (l >= 0 && r < s.length && s[l] === s[r]) {
					if (r - l + 1 > resLen) {
							res = s.slice(l, r + 1);
							resLen = r - l + 1;
					}
					l -= 1;
					r += 1;
			}
	}
			
	return res;
};