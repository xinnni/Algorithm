/* solution */

function solution(arr) {
  let max = arr[0].length;
  for (let el of arr) {
    if (max < el.length) max = el;
  }
  return max;
}

/* develop */

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let el of arr) {
    if (el.length > max) {
      max = el.length;
      answer = el;
    }
  }
  return answer;
}
