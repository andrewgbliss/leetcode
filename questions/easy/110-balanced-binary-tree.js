// https://leetcode.com/problems/balanced-binary-tree/description/

// Given a binary tree, determine if it is 
// height-balanced
// .

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (height(root) === -1) return false;
    return true;
};

var height = function(root) {

    // If there is no leaf then count that as zero
    if (!root) return 0;

    // Get the left height of the leaf node
    var lheight = height(root.left);
    if (lheight === -1) return -1;

    // Get the right height of the leaf node
    var rheight = height(root.right);
    if (rheight === -1) return -1;

    // Only allow height difference of 1, if its two or more it is unbalanced
    if (Math.abs(lheight - rheight) > 1) return -1;

    // The height of a tree is the left height or right height plus one for root leaf
    return Math.max(lheight, rheight) + 1;
}