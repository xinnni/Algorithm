/* solution */

function solution(str) {
  let anwser = "";
  for (let el of str) {
    if (el === el.toUpperCase()) anwser += el.toLowerCase();
    else anwser += el.toUpperCase();
  }
  return anwser;
}
