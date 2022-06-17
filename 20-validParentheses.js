// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
	var stack = [];
	for (var i = 0; i < s.length; i++) {
			var c = s[i];
			if (c === '(' || c === '{' || c === '[') {
					stack.push(c);
			} else {
					if (stack.length === 0) return false;
					var c2 = stack.pop();
					if (c2 === '(' && c !== ')') return false;
					if (c2 === '[' && c !== ']') return false;
					if (c2 === '{' && c !== '}') return false;
			}
	}
	return stack.length === 0;
};