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
var treeTraversal = function (root) {

	var arr = [];
	var curr = root;

	// Recursion
	// function traverse(node) {
	//     if (!node) return
	//     arr.push(node.val);
	//     if (node.left != null){
	//         traverse(node.left);
	//     }
	//     if (node.right != null){
	//         traverse(node.right);
	//     }
	// }

	// Iterative - Pre Order
	var s = [];
	s.push(curr);
	function traverse() {
		while (s.length > 0) {
			curr = s.pop();
			if (!curr) continue;

			arr.push(curr.val);

			if (curr.right) {
				s.push(curr.right);
			}
			if (curr.left) {
				s.push(curr.left);
			}
		}
	}

	// In Order
	function traverse() {
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
	}

	traverse(root);

	return arr;

};