# leetcode

# Math

Complementary number - The number derived by subtracting a number from a base number. For example, the tens complement of 8 is 2

# Modulus

x % 10 - This will give the right most digit

# Division

Math.floor(x / 10) - This will pull the most right digit off

# Finding the Middle

let middle = left + Math.floor((right - left) / 2);

# Hashmap

A hashmap can be useful to store a key value pair for easy lookup. Can cache results of an algorithm for later use. So it doesn't have to recalculate the result.

# Divide and conquer

This technique can be divided into the following three parts:

Divide: This involves dividing the problem into smaller sub-problems.
Conquer: Solve sub-problems by calling recursively until solved.
Combine: Combine the sub-problems to get the final solution of the whole problem.

Quicksort

# Binary search

Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).

Find the middle,
if the middle is less than the target then move the left pointer to the middle plus one
if the middle is more than the target then move the right pointer to the middle minus one

# Stack

The stack data structure is a linear data structure that accompanies a principle known as LIFO (Last In First Out) or FILO (First In Last Out).

# Recursion

Dividing the problem into smaller sub problems and recursively call itself until all the problems are solved.

Start with a base case so the recursion will end. If it doesn't end it will call an infinite loop.
Diving the problem into smaller problems.

# Traversing Linked Lists

Head is the start of the list
Current is the current pointer of the list

# Traversing Binary Trees

Algorithm Inorder(tree)

Traverse the left subtree, i.e., call Inorder(left->subtree)
Visit the root.
Traverse the right subtree, i.e., call Inorder(right->subtree)

Uses of Inorder Traversal:
In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal is reversed can be used.

Algorithm Preorder(tree)

Visit the root.
Traverse the left subtree, i.e., call Preorder(left->subtree)
Traverse the right subtree, i.e., call Preorder(right->subtree)

Uses of Preorder:
Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expressions on an expression tree.

Algorithm Postorder(tree)

Traverse the left subtree, i.e., call Postorder(left->subtree)
Traverse the right subtree, i.e., call Postorder(right->subtree)
Visit the root

Uses of Postorder:
Postorder traversal is used to delete the tree. Postorder traversal is also useful to get the postfix expression of an expression tree
