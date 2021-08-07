/* solution */

function solution(arr) {
  let answer = [],
    cnt = 0;
  for (let el of arr) {
    if (el === 1) {
      cnt++;
      answer.push(cnt);
    } else {
      cnt = 0;
    }
  }
  return answer.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

/* develop */

function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let el of arr) {
    if (el === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}
