/* solution */

const solution = (arr) => {
	     let answer = arr.sort((a, b) => a - b).shift()
         return answer
}
  
/* develop(1) */

const solution = (arr) => {
      let answer, min = Number.MAX_SAFE_INTEGER
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < min) min = arr[i]
        }
      answer = min
   return answer
}

/* develop(2) */
  
const solution = (arr) => {
      let answer, min = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < min) min = arr[i]
        }
      answer = min
   return answer
}

/* develop(3) */
  
const solution = (arr) => {
      let answer = Math.min(...arr)
		   return answer
}
  
/* develop(4) */

const solution = (arr) => {
      let answer = Math.min(...arr)
		   return answer
  }