// https://leetcode.com/problems/symmetric-tree/description/

// 101. Symmetric Tree
// Easy
// 13.6K
// 306
// Companies
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?

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
var isSymmetric = function(root) {
    return isTreeSymmetric(root.left, root.right);    
};

var isTreeSymmetric = (leftRoot, rightRoot) => {
    if (leftRoot === null && rightRoot === null) return true;
    if ((leftRoot === null && rightRoot !== null) || (leftRoot !== null && rightRoot === null)) return false;
    if (leftRoot.val !== rightRoot.val) return false;
    return isTreeSymmetric(leftRoot.left, rightRoot.right) && isTreeSymmetric(leftRoot.right, rightRoot.left);
}


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
var isSymmetric = function(root) {
    if (!root) return true;
    const lStack = [];
    const rStack = [];
    lStack.push(root.left);
    rStack.push(root.right);
    while (lStack.length > 0 && rStack.length > 0) {
        const t1 = lStack.pop();
        const t2 = rStack.pop();
        if (t1 === null && t2 === null) continue;
        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;
        lStack.push(t1.right);
        lStack.push(t1.left);
        rStack.push(t2.left);
        rStack.push(t2.right);
    }
    return lStack.length === 0 && rStack.length === 0;
};