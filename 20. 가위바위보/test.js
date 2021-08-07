/* solution */

function solution(a, b) {
  // 1: 가위 a // b: 3
  // 2: 바위 a // b: 1
  // 3: 보  a // b: 2
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push("D");
    else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    )
      answer.push("A");
    else answer.push("B");
  }
  return answer;
}

/* develop */

function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    )
      answer += "A" + " ";
    else answer += "B" + " ";
  }
  return answer.length - 1;
}
