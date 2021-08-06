/* solution */

function solution(str) {
  let answer = "";
  for (let el of str) {
    answer += el.toUpperCase();
  }
  return answer;
}

/* develop(1) */

function solution(str) {
  let answer = "";
  for (let el of str) {
    if (el === el.toUpperCase()) {
      answer += el.toUpperCase();
    } else answer += el;
  }
  return answer;
}

/* develop(2) */

function solution(str) {
  let answer = "";
  for (let el of str) {
    let num = el.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else {
      answer += el;
    }
  }
  return answer;
}

/* develop(3) */

function solution(str) {
  let newStr = str.toUpperCase();
  return newStr;
}
