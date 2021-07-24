/* solution(1) */

const solution = (arr) => {
	     let answer = []
        for (let i = 0; i < arr.length; i++) {
          if(arr.indexOf(arr[i]) === i) {
            answer.push(arr[i])
       }
      }
   return answer;
}
   
/* solution(2) */

const solution = (arr) => {
	     return [...new Set(arr)]
   }
  
/* develop */

const solution = (arr) => {
      let answer
        answer = arr.filter((val, idx) => {
       return arr.indexOf(val) === idx
     })
   return answer
  }