// Maximal Square | LeetCode 221
// Given a 2D binary matrix filled with 0's and 1's,
// find the largest square containing only 1's and return its area.
function maximalSquare(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let dp = Array(rows + 1)
    .fill()
    .map(() => Array(cols + 1).fill(0));
  let maxsqlen = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === 1) {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[i][j]);
      }
    }
  }
  return maxsqlen;
}

let arr = [
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 1, 1]
];

console.log(maximalSquare(arr));
