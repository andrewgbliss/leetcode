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