// Getting Started //

N개의 자연수가 입력 되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수입니다. 그러면 23을 출력해야 합니다. 단 910를 뒤집으면 19로 숫자화 해야 합니다. 첫 자리부터의 연속된 0은 무시합니다.

// INPUT //

let arr= [32, 55, 62, 20, 250, 370, 200, 30, 100];

// OUTPUT //

console.log(solution(str)) -> [23, 2, 73, 2, 3]

- 예를 들어 세 자리 숫자를 보자. el = 307이라고 치면, % 10을 했을 때 1의 자리 숫자가 나온다. 즉 7이다. 7을 tmp에 넣는다. 그렇다면 처음에 result = 0 으로 지정해 준 곳에 result _ 10 + tmp를 한다면? 값은 0 _ 10 + 7 = 7
- 그리고 el은 10으로 나눈, 즉 / 10을 한 몫으로 바뀌기 때문에 30.7이 될 것이다. 이를 정수로 바꾸는 parseInt로 해 주면 30.
- 그러면 다음으로 다시 돌아가서, el = 30이라고 치면, % 10을 했을 때 1의 자리 숫자가 나온다. 즉 0이다. 0을 tmp에 넣는다. 그렇다면 처음에 result = 0 으로 지정해 준 곳에 현재 값은 7일 테니까, result _ 10 + tmp를 한다면? 값은 7 _ 10 + 0 = 70
- 그리고 el은 10으로 나눈, 즉 / 10을 한 몫으로 바뀌기 때문에 3이 될 것이다. 이를 정수로 바꾸는 parseInt로 해 주면 3.
- 그러면 다음으로 다시 돌아가서, el = 3이라고 치면, % 10을 했을 때 1의 자리 숫자가 나온다. 즉 3이다. 3을 tmp에 넣는다. 그렇다면 처음에 result = 0 으로 지정해 준 곳에 현재 값은 70일 테니까, result _ 10 + tmp를 한다면? 값은 70 _ 10 + 3 = 703
- 마지막으로 3을 나눈 숫자는 0이기 때문에 while문이 종료된다.
