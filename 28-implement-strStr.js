// https://leetcode.com/problems/implement-strstr/

// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// O (n * m)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
	if (needle === "") return 0;
	
	for (var i = 0; i < haystack.length; i++) {
			if (haystack[i] === needle[0]) {
					var found = true;
					for (var j = 0; j < needle.length; j++) {
							if (needle[j] !== haystack[i + j]) {
									found = false;
							}
					}
					if (found) {
							return i;
					}
			}
	}
	return -1;
};

// O(n)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
	needleIndex = 0;
	for( var i = 0; i < haystack.length; i++) {
			// not enough characters left in haystack to possibly  match needle
			if (i + needle.length - needleIndex > haystack.length)
					break;
			// if match, increase needleIndex
			// if not match, reset needleIndex to 0 and move i to the last start check position
			if (haystack[i] === needle[needleIndex]){
					needleIndex++;
			} else {
					i -= needleIndex;
					needleIndex = 0;
			}
			// all characters in needle are in haystack
			if (needleIndex === needle.length)
					return i - needle.length + 1;
	}
	return -1;
	
};