function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
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


  
  // Breadth-First Search (BFS)
  function bfs(root) {
	if (root === null) {
	  return [];
	}
  
	const result = [];
	const queue = [root];
  
	while (queue.length > 0) {
	  const node = queue.shift();
	  result.push(node.value);
  
	  if (node.left) {
		queue.push(node.left);
	  }
	  if (node.right) {
		queue.push(node.right);
	  }
	}
  
	return result;
  }
  
  // Depth-First Search (DFS) in Pre-order
  function dfsPreorder(root) {
	if (root === null) {
	  return [];
	}
  
	const result = [];
	const stack = [root];
  
	while (stack.length > 0) {
	  const node = stack.pop();
	  result.push(node.value);
  
	  if (node.right) {
		stack.push(node.right);
	  }
	  if (node.left) {
		stack.push(node.left);
	  }
	}
  
	return result;
  }
  
  // Depth-First Search (DFS) in In-order
  function dfsInorder(root) {
	if (root === null) {
	  return [];
	}
  
	const result = [];
	const stack = [];
	let node = root;
  
	while (stack.length > 0 || node) {
	  if (node) {
		stack.push(node);
		node = node.left;
	  } else {
		node = stack.pop();
		result.push(node.value);
		node = node.right;
	  }
	}
  
	return result;
  }
  
  // Depth-First Search (DFS) in Post-order
  function dfsPostorder(root) {
	if (root === null) {
	  return [];
	}
  
	const result = [];
	const stack = [[root, false]];
  
	while (stack.length > 0) {
	  const [node, visited] = stack.pop();
  
	  if (visited) {
		result.push(node.value);
	  } else {
		stack.push([node, true]);
		if (node.right) {
		  stack.push([node.right, false]);
		}
		if (node.left) {
		  stack.push([node.left, false]);
		}
	  }
	}
  
	return result;
  }
  
  // Create a sample tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  console.log("BFS:", bfs(root)); // Output: [1, 2, 3, 4, 5, 6, 7]
  console.log("DFS (Pre-order):", dfsPreorder(root)); // Output: [1, 2, 4, 5, 3, 6, 7]
  console.log("DFS (In-order):", dfsInorder(root)); // Output: [4, 2, 5, 1, 6, 3, 7]
  console.log("DFS (Post-order):", dfsPostorder(root)); // Output: [4, 5, 2, 6, 7, 3, 1]
  