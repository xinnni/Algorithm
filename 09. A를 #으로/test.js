/* solution */

function solution(arr) {
  let answer = str.replaceAll("A", "#");
  return answer;
}

/* develop(1) */

function solution(arr) {
  let answer = "";
  for (let el of str) {
    if (el === "A") answer += "#";
    else answer += el;
  }
  return answer;
}

/* develop(2) */

function solution(arr) {
  let answer = str;
  answer = answer.replace(/A/g, "#");
  /* 
         정규식 표현 /A/는 문자열에서 A를 찾겠다는 것이다.
		 뒤에 g를 붙이는 이유는 전체 A를 바꿔야 하기 때문에,
		 global의 g를 따서 넣는 것이다.
         */
  return answer;
}
