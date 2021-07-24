// Getting Started //

N 개의 문자열이 입력 되면 중복된 문자열은 제거하고 출력하는 로직을 구현하라. 출력하는 문자열은 원래의 입력순서를 유지합니다.

// INPUT //

let arr = [`good`, `time`, `good`, `time`, `student`]

// OUTPUT //

console.log(solution(arr)) -> [`good`, `time`, `student`]

- arr.filter((val, idx) ⇒ {}): 필터 함수 안에서 val은 배열의 요소 하나하나를 출력하고, idx는 인덱스를 출력한다. 이때 필터 함수의 역할은 콜백 함수 안에서 어떠한 값이 참일 때만 그것을 반환해 주는 역할이다.
- 우리는 이 함수를 이용해서 arr.indexOf(val)로 걸러지는 숫자와 idx가 일치하는 값만 반환하여 답을 얻을 수 있다.
- console.log(arr.indexOf(val))를 찍으면 인덱스 번호가 찍힌다.