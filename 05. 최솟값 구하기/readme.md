# Getting Started

7 개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 로직을 구현하세요.

# INPUT

let arr = [5, 3, 7, 11, 2, 15, 17]

# OUTPUT

console.log(solution(arr)) -> 2

- Number.MAX_SAFE_INTEGER : 안정적인 가장 큰 정수값이 들어가게 된다.
- Math.min(): 최솟값을 구해 주는데, 인자로만 들어가야 한다. 고로 배열을 넣고 싶으면 전개 연산자 문법을 사용해서 펼쳐 줘야 한다.
- Math.min.apply(null, arr): 전개 연산자를 사용하고 싶지 않을 때 적어 준다. 첫 번째 인자에는 객체를 넣어 줘야 하는데, 그 부분에 null을 넣어 준다. 그리고 두 번째 인자에 배열을 넣어 준다면 최솟값을 구할 수 있다. 최댓값도 마찬가지이다.
