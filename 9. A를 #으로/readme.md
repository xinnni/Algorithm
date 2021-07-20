// Getting Started //

대문자로 이루어진 영어 단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 로직을 구현하라.

// INPUT //

let str = `BANANA`

// OUTPUT //

console.log(solution(str)) -> B#N#N#

- else 문을 적용해야 한다.
- string 타입의 문자열에도 for of 문을 사용할 수 있다.
- 정규식 표현에서 // 사이에 어떤 문자열을 넣는 건, 그 문자열을 찾겠다는 뜻이고 뒤에 g를 넣는 건 전역이라는 뜻이다.
- 굳이 replaceAll을 쓰지 않아도 된다.
- 그리고 스트링은 값이 복사가 되는 거지, 얕은 복사가 되는 것이 아니기 때문에 answer에 str을 할당한다고 해서 str을 고쳤을 때 answer가 바뀌지는 않는다. 주의해야 한다. 배열과는 다르다는 사실을 늘 인지해야 한다.