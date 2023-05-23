// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1

const MAX_VALUE = 2 ** 31;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	if (x == 0) return 0;
	var reversedInt = 0;
	var negative = x < 0;
	var x = negative ? -x : x;
	while (x > 0) {
		var digit = x % 10;
		x = Math.floor(x / 10);
		reversedInt = (reversedInt * 10) + digit;
		if (reversedInt > MAX_VALUE || reversedInt < -MAX_VALUE) {
			return 0;
		}
	}

	return negative ? -reversedInt : reversedInt;
};

