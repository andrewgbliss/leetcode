// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?

// Solve it using a string
// This uses two pointers a left and right and if they are not equal at all times
// then its not a palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) { 
    let str = x.toString();
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Solve it without using a string
// This uses the modulus and division to make a reversed number
// Need to work this out on paper to understand
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x === 0) return true;
	if (x < 0 || x % 10 === 0) {
		return false;
	}
	var reversedInt = 0;
	while (x > reversedInt) {
		var digit = x % 10;
		x = Math.floor(x / 10);
		reversedInt = (reversedInt * 10) + digit;
	}

	return (x === reversedInt || x === Math.floor(reversedInt / 10));
};