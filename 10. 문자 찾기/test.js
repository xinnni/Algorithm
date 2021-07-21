/* solution */

const solution = (str, t) => {
	     let answer = 0;
          for(let el of str) {
            if(el === t) answer++
         }
       return answer;
}
  
/* develop */

const solution = (str, t) => {
      let answer = str.split(t).length
	   return answer - 1
  }
