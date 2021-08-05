/* solution */

function solution(m, arr) {
  let answer = 0,
    sum = 0,
    ip = 0;
  for (let rp = 0; rp < arr.length; rp++) {
    sum += arr[rp];
    while (sum > m) {
      sum -= arr[ip++];
    }
    answer += rp - ip + 1;
  }
  return answer;
}
