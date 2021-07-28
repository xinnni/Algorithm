/* solution */

const solution = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  let len = arr.length;
  let maxC = (maxR = 0);
  let firstDiagonal = (secondDiagonal = 0);
  for (let i = 0; i < len; i++) {
    maxC = maxR = 0;
    for (let j = 0; j < len; j++) {
      maxR += arr[i][j]; // 행
      maxC += arr[j][i]; // 열
    }
    max = Math.max(max, maxR, maxC);
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][len - i - 1];
  }
  max = Math.max(max, firstDiagonal, secondDiagonal);
  return max;
};
