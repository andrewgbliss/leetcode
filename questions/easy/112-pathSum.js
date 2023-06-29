// https://leetcode.com/problems/path-sum/description/

// 112. Path Sum
// Easy
// 8.5K
// 951
// Companies
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (root.val === targetSum && !root.left && !root.right) return true;
    return hasPathSum(root.right, targetSum - root.val) || hasPathSum(root.left, targetSum - root.val);
};

// A leaf is one with no children. No left and no right.
// Can use the complimentry number to go down each node, and if it reaches with the ending of that complimentary number then it has the root to leaf path sum

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

// Val: 5
// Complimentray Number: 22 - 5 = 17
// Val: 4
// Complimentray Number: 17 - 4 = 13
// Val: 11
// Complimentray Number: 13 - 11 = 2
// Val: 2
// Complimentray Number: 2
// This path is the path sum. by cutting up the path into complimetry numbers we can get the path sum