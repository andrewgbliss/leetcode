/**
 * numIslands
 */

//  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

//  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



//  Example 1:

//  Input: grid = [
// 	 ["1","1","1","1","0"],
// 	 ["1","1","0","1","0"],
// 	 ["1","1","0","0","0"],
// 	 ["0","0","0","0","0"]
//  ]
//  Output: 1
//  Example 2:

//  Input: grid = [
// 	 ["1","1","0","0","0"],
// 	 ["1","1","0","0","0"],
// 	 ["0","0","1","0","0"],
// 	 ["0","0","0","1","1"]
//  ]
//  Output: 3


//  Constraints:

//  m == grid.length
//  n == grid[i].length
//  1 <= m, n <= 300
//  grid[i][j] is '0' or '1'.

// O(m * n)

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	const m = grid.length, n = grid[0].length;
	var islandsCount = 0;

	for (var row = 0; row < m; row++) {
		for (var col = 0; col < n; col++) {
			var isLand = grid[row][col] === "1";
			if (isLand) {
				foundLand();
			}
		}
	}

	function foundLand() {
		islandsCount++;
		sinkIsland(row, col);
	}

	function sinkIsland(row, col) {
		if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return;
		if (grid[row][col] != "1") return;

		grid[row][col] = "0";
		sinkIsland(row + 1, col);
		sinkIsland(row, col + 1);
		sinkIsland(row, col - 1);
		sinkIsland(row - 1, col);
	}
	return islandsCount;
};