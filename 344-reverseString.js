// https://leetcode.com/problems/reverse-string/

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//  var reverseString = function(s) {
// 	// s.reverse();
// 	var arr = [];
// 	for (var i = 0; i < s.length; i++) {
// 			var c1 = s[i];
// 			var c2 = s[s.length - i - 1];
// 			console.log(c1, c2);
// 			arr.push(c2);
// 			// s[i] = c2;
// 			// s[s.length - i - 1] - c1;
// 	}
// 	console.log({ arr })
// 	for (var i = 0; i < s.length; i++) {
// 			s[i] = arr[i];
// 	}
// };

// Two pointers

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
//  var reverseString = function(s) {
// 	let left = 0;
// 	let right = s.length - 1;
	
// 	while (left < right) {
// 			[s[left], s[right]] = [s[right], s[left]];
// 			console.log([s[left], s[right]]);
// 			console.log([s[right], s[left]]);
// 			left++;
// 			right--;
// 	}
// 	// console.log(s);
// };

var reverseString = function(s) {
	for(let i =0; i< s.length/2; i++){
			[s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]];
	}
};

reverseString('hello');

const c = ['a', 'n', 'd', 'y'];
[c[0], c[1]] = ['x', 'r'];
console.log(c);

let a, b, rest;
[a, b] = [11, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]