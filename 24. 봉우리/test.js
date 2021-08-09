/* solution */

function solution(arr) {
  let cnt = 0;
  let len = arr.length;
  let dx = [-1, 0, 1, 0]; // 행 12 시 -> 3 시 -> 6 시 -> 9 시 방향
  let dy = [0, 1, 0, -1]; // 열 12 시 -> 3 시 -> 6 시 -> 9 시 방향

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let pointX = i + dx[k];
        let pointY = j + dy[k];
        if (
          pointX >= 0 &&
          pointX < len &&
          pointY >= 0 &&
          pointY < len &&
          arr[pointX][pointY] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) cnt++;
    }
    return cnt;
  }
}
