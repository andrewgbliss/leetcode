/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	var arr = [];
	var rows = matrix.length;
	var cols = matrix[0].length;
	var left = 0,
		right = cols - 1,
		top = 0,
		bottom = rows - 1;

	while (left <= right && top <= bottom) {
		for (var i = left; i <= right; i++) {
			arr.push(matrix[top][i]);
		}
		top++;
		for (var i = top; i <= bottom; i++) {
			arr.push(matrix[i][right]);
		}
		right--;

		if (top <= bottom) {
			for (var i = right; i >= left; i--) {
				arr.push(matrix[bottom][i]);
			}
			bottom--;
		}

		if (left <= right) {
			for (var i = bottom; i >= top; i--) {
				arr.push(matrix[i][left]);
			}
			left++;
		}
	}
	return arr;
};