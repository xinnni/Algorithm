# Getting Started

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력하는 로직을 구현하세요.

# INPUT

```js
let a = 6;
let b = 7;
let c = 11;
```

# OUTPUT

```js
console.log(solution(a, b, c));
// YES
```

- 삼각형의 가장 긴 변은 나머지 두 변의 길이 합보다 작아야 삼각형이 생성될 수 있다. 즉, 두 변의 합이 가장 긴 변이랑 같아도 그것은 삼각형이 될 수 없다는 뜻이다.
