/* solution */

function solution(str) {
  const regex = /[^0-9]/g;
  let answer = parseInt(str.replace(regex, ""));
  return answer;
}

/* develop(1) */

function solution(str) {
  let answer = "";
  for (let el of str) {
    if (!isNaN(el)) answer += el;
  }
  return parseInt(answer);
}

/* develop(2) */

function solution(str) {
  let answer = 0;
  for (let el of str) {
    if (!isNaN(el)) answer *= 10 + Number(el);
  }
  return answer;
}
