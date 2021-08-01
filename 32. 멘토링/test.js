/* solution */

const solution = (test) => {
  let answer = 0;
  let m = test.length; // 테스트 횟수
  let n = test[0].length; // 학생 수

  for (let i = 1; i <= n; i++) {
    // i = 멘토가 될 학생의 번호
    for (let j = 1; j <= n; j++) {
      // j = 멘티가 될 학생의 번호
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        // k = 수학 테스트 번호
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          // 각 테스트에서의 등수
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
};
