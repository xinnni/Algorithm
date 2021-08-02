/* solution */

const solution = (n, k, card) => {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let v = j + 1; v < n; v++) {
        tmp.add(card[i] + card[j] + card[v]);
      }
    }
  }
  let arr = Array.from(tmp).sort((a, b) => b - a);
  answer = arr[k - 1];
  return answer;
};
