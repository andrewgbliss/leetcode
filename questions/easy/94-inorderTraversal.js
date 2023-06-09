// https://leetcode.com/problems/binary-tree-inorder-traversal/

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
	var curr = root;
	var arr = [];
	var s = [];
	while (curr != null || s.length > 0) {
		while (curr != null) {
			s.push(curr);
			curr = curr.left;
		}

		curr = s.pop();
		arr.push(curr.val);

		curr = curr.right;
	}
	return arr;
};

// Recursion

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const arr = [];
    inOrder(root, arr);
    return arr;
};

const inOrder = (root, arr) => {
    if (root === null) return null;
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}