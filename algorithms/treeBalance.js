// Define the Node class
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  // Define the AVLTree class
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // Helper function to get the height of a node
    getHeight(node) {
      if (node === null) return 0;
      return node.height;
    }
  
    // Helper function to update the height of a node
    updateHeight(node) {
      if (node === null) return;
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
  
    // Helper function to get the balance factor of a node
    getBalanceFactor(node) {
      if (node === null) return 0;
      return this.getHeight(node.left) - this.getHeight(node.right);
    }
  
    // Helper function to perform a right rotation
    rotateRight(node) {
      const newRoot = node.left;
      const temp = newRoot.right;
  
      // Perform rotation
      newRoot.right = node;
      node.left = temp;
  
      // Update heights
      this.updateHeight(node);
      this.updateHeight(newRoot);
  
      return newRoot;
    }
  
    // Helper function to perform a left rotation
    rotateLeft(node) {
      const newRoot = node.right;
      const temp = newRoot.left;
  
      // Perform rotation
      newRoot.left = node;
      node.right = temp;
  
      // Update heights
      this.updateHeight(node);
      this.updateHeight(newRoot);
  
      return newRoot;
    }
  
    // Helper function to balance the tree
    balance(node) {
      // Update the height of the current node
      this.updateHeight(node);
  
      // Check the balance factor and perform rotations if necessary
      const balanceFactor = this.getBalanceFactor(node);
  
      if (balanceFactor > 1) {
        // Left subtree is heavier
        if (this.getBalanceFactor(node.left) < 0) {
          // Left-Right case
          node.left = this.rotateLeft(node.left);
        }
        // Left-Left case
        return this.rotateRight(node);
      }
  
      if (balanceFactor < -1) {
        // Right subtree is heavier
        if (this.getBalanceFactor(node.right) > 0) {
          // Right-Left case
          node.right = this.rotateRight(node.right);
        }
        // Right-Right case
        return this.rotateLeft(node);
      }
  
      // No imbalance, return the node as it is
      return node;
    }
  
    // Public method to insert a value into the tree
    insert(value) {
      this.root = this.insertNode(this.root, value);
    }
  
    // Helper function to insert a value into the tree
    insertNode(node, value) {
      // Perform regular BST insertion
      if (node === null) return new Node(value);
  
      if (value < node.value) {
        node.left = this.insertNode(node.left, value);
      } else {
        node.right = this.insertNode(node.right, value);
      }
  
      // Balance the tree
      return this.balance(node);
    }
  
    // Helper function to get the minimum value node in a subtree
    getMinValueNode(node) {
      let current = node;
  
      while (current.left !== null) {
        current = current.left;
      }
  
      return current;
    }
  
    // Public method to remove a value from the tree
    remove(value) {
      this.root = this.removeNode(this.root, value);
    }
  
    // Helper function to remove a value from the tree
    removeNode(node, value) {
      // Perform regular BST deletion
      if (node === null) return null;
  
      if (value < node.value) {
        node.left = this.removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.removeNode(node.right, value);
      } else {
        // Node found
  
        // Node with only one child or no child
        if (node.left === null || node.right === null) {
          const temp = node.left || node.right;
  
          if (temp === null) {
            // No child case
            node = null;
          } else {
            // One child case
            node = temp;
          }
        } else {
          // Node with two children
          const temp = this.getMinValueNode(node.right);
          node.value = temp.value;
          node.right = this.removeNode(node.right, temp.value);
        }
      }
  
      // If the tree had only one node
      if (node === null) return node;
  
      // Balance the tree
      return this.balance(node);
    }
  
    // Public method to traverse the tree in an inorder manner
    inorder() {
      this.inorderTraversal(this.root);
    }
  
    // Helper function to perform an inorder traversal
    inorderTraversal(node) {
      if (node === null) return;
  
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }
  
  // Usage example:
  const avlTree = new AVLTree();
  
  avlTree.insert(10);
  avlTree.insert(20);
  avlTree.insert(30);
  avlTree.insert(40);
  avlTree.insert(50);
  avlTree.insert(25);
  
  console.log("Inorder traversal:");
  avlTree.inorder();
  
  avlTree.remove(30);
  
  console.log("Inorder traversal after removing 30:");
  avlTree.inorder();
  