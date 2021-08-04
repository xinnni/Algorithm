/* solution */

function solution(a, b, c) {
  let answer = "YES";
  let arr = [a, b, c];
  let sortArr = arr.sort((a, b) => a - b);

  if (sortArr[0] + sortArr[1] <= sortArr[2]) {
    answer = "NO";
  } else {
    answer;
  }
  return answer;
}

/* develop */

function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";

  return answer;
}
