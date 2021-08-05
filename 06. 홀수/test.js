/* solution */

function solution(arr) {
  let oddNum = [];
  let sum = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNum.push(arr[i]);
    }
  }
  let sliceNum = oddNum.slice();
  min = sliceNum.sort((a, b) => a - b).shift();
  for (let i = 0; i < oddNum.length; i++) {
    sum += oddNum[i];
  }
  answer.push(sum, min);
  return answer;
}

/* develop */

function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let el of arr) {
    if (el % 2 !== 0) {
      sum += el;
      if (el < min) min = el;
    }
  }
  answer.push(sum, min);
  return answer;
}
