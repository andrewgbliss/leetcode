// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

// Return the number of islands in grid2 that are considered sub-islands.

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function (grid1, grid2) {
	const m = grid2.length, n = grid2[0].length;
	let count = 0;
	let visited = {};

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid2[i][j] && !visited[`${i}-${j}`] && dfs(i, j)) {
				count += 1;
			}
		}
	}

	function dfs(i, j) {

		if (i < 0 || j < 0 || i === m || j === n || grid2[i][j] === 0 || visited[`${i}-${j}`]) {
			return true;
		}

		visited[`${i}-${j}`] = true;

		var res = true;

		if (grid1[i][j] === 0) {
			res = false;
		}

		res = dfs(i - 1, j) && res;
		res = dfs(i + 1, j) && res;
		res = dfs(i, j - 1) && res;
		res = dfs(i, j + 1) && res;

		return res;
	}

	return count;
};

// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.