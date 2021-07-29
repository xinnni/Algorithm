/* solution */

const solution = (s, t) => {
  let answer = [];
  let count = 1000;

  for (let el of s) {
    if (el === t) {
      count = 0;
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }
  count = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
      answer[i] = Math.min(answer[i], count);
    }
  }
  return answer;
};
