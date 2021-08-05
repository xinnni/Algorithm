/* solution */

function solution(arr) {
  let sum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let answer = arr;
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        answer.splice(i, 1);
        answer.splice(j - 1, 1);
        /* 
                여기서 j - 1을 해 주는 이유는, 앞서 i의 인덱스를 하나
			    지워 주게 된다면 해당 인덱스의 변화가 오게 될 것이다.
				그렇게 되면 j의 인덱스가 바뀌었다는 뜻이고, 앞서 하나가
			    사라졌으니까 j의 인덱스에도 변화를 주어야 한다.
				그게 아니라면 j를 먼저 지워 주고 i를 지우면 된다.
		        이유는 j를 먼저 지워도 i의 인덱스에는 변화가 없기 때문이다.
                */
      }
    }
  }
  return answer;
}
