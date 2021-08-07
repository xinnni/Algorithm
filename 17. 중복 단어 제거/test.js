/* solution(1) */

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

/* solution(2) */

function solution(arr) {
  return [...new Set(arr)];
}

/* develop */

function solution(arr) {
  let answer;
  answer = arr.filter((val, idx) => {
    return arr.indexOf(val) === idx;
  });
  return answer;
}
