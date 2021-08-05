/* solution */

function solution(m, arr) {
  let answer = 0,
    lp = 0,
    sum = 0;
  for (let rp = 0; rp < arr.length; rp++) {
    sum += arr[rp];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lp++];
      if (sum === m) answer++;
    }
  }
  return answer;
}
