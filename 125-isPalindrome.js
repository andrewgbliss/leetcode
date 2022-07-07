// https://leetcode.com/problems/valid-palindrome/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
	// Create a string only if valid alpha-numeric characters
	var str = "";
	for (var i = 0; i < s.length; i++) {
			var code = s.charCodeAt(i);
			if (code >= 65 && code <= 90) {
					str += s[i].toLowerCase();
			} else if (code >= 97 && code <= 122) {
					str += s[i];
			} else if (code >= 48 && code <= 57) {
					str += s[i];
			}
	}
	// Create the left and right pointer
	i = 0;
	var j = str.length - 1;
	while (i <= j) {
		// If the left character doesn't match the right, then its false
			if (str[i] != str[j]) {
					return false;
			}
			i++;
			j--;
	}
	// all characters matched from the left and right pointers
	return true;
};