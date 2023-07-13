// https://leetcode.com/problems/pascals-triangle/description/

// 118. Pascal's Triangle
// Easy
// 10.5K
// 340
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    // arr will be the result that we return
    let arr = [];    

    // Go through numRows starting with 1 until we reach numRows
    for (let row = 1; row <= numRows; row++) {

        // Create a temp array that we can fill up according to the row we are one
        let temp = [];

        // Every row starts with a 1
        let ans = 1;
        temp.push(ans);

        // Now we want to loop again the rest of the row
        // So starting with one we want to go until we hit 1 less than row because we fill that already with 1
        // So
        // row = 1, col = 1 - will not run
        // row = 2, col = 1 - will run one time and add a 1 so it will be [1, 1]
        // row = 3, col = 1 - will one two times
        for (let col = 1; col < row; col++) {

            // Dont really know what this math calculation is doing
            ans = ans * (row - col);
            ans = ans / col;
            temp.push(ans);
        }

        // Append thay temp array as the row
        arr.push(temp);
    }
    return arr;
};