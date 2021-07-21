// Getting Started //

한 개의 문자열을 입력 받고, 특정 문자를 입력 받아 해당 특정문자가 입력 받은 문자열에 몇 개 존재하는지 알아내는 로직을 구현하라.

// INPUT //

let str = `COMPUTERPROGRAMMING`
let t = `R`

// OUTPUT //

console.log(solution(str, t)) -> 3

- split() 안에 값을 넣으면 그 값을 기준으로 문자가 잘린다. 그리고 문자가 배열화된다.
- t가 구분자가 되어 해당 문자열을 나누고 그 배열화된 문자열들의 개수를 확인하고, - 1을 해 준다면 해당 문자의 개수를 알 수 있을 것이다.