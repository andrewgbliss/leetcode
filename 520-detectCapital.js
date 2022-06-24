// https://leetcode.com/problems/detect-capital/

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
	if (word.length <= 1) {
			return true;
	}
	var firstChar = isCapital(word[0]);
	var secondChar = isCapital(word[1]);
	if (word.length <= 2) {
			if (firstChar && secondChar) {
					return true;
			}
			if (firstChar && !secondChar) {
					return true;
			}
			if (!firstChar && !secondChar) {
					return true;
			}
			if (!firstChar && secondChar) {
					return false;
			}
	}
	for (var i = 2; i < word.length; i++) {
			var ch = word[i];
			var charIsCapital = isCapital(ch);
			if (firstChar && secondChar && !charIsCapital) {
					return false;
			}
			if (firstChar && !secondChar && charIsCapital) {
					return false;
			}
			if (!firstChar && !secondChar && charIsCapital) {
					return false;
			}
			 if (!firstChar && secondChar) {
					return false;
			}
	}
	return true;
};

function isCapital(ch){
	return ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90;
}