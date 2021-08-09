/* solution */

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let el of arr) {
    let sum = 0,
      tmp = el;
    while (tmp) {
      sum += tmp % 10;
      tmp = parseInt(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = el;
    } else if (sum === max) {
      if (el > answer) answer = el;
    }
  }
  return answer;
}

/* develop */

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let el of arr) {
    let sum = el
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
    if (sum > max) {
      max = sum;
      answer = el;
    } else if (sum === max) {
      if (el > answer) answer = el;
    }
  }
  return answer;
}
