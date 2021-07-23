/* solution */

const solution = (str) => {
	     let answer = [...str]
		 // Spread Syntax를 사용해 배열 안에 문자열을 펼쳐서
		 // 보여 준다.
        return [... new Set(answer)].join('')
  }
  
/* develop */

const solution = (str) => {
    let answer = ''
    
    for (let i = 0; i < str.length; i++) {
          if(str.indexOf(str[i]) === i) answer += str[i]
    }
   return answer
  }