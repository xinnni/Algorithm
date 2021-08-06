/* solution */

function solution(str) {
  let answer;
  let mid = parseInt(str.length / 2);
  if (str.length % 2 !== 0) answer += str.substring(mid, mid + 1);
  else answer += str.substring(mid - 1, mid + 1);

  return answer;
}

/* develop */

function solution(str) {
  let answer;
  let mid = parseInt(str.length / 2);
  if (str.length % 2 !== 0) answer += str.substr(mid, 1);
  else answer += str.substr(mid - 1, 2);

  return answer;
}
