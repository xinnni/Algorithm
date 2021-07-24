/* solution */

const solution = (arr) => {
      let answer = 1, max = arr[0]
        for (let i = 1; i < arr.length; i++) {
          if(max < arr[i]) {
              max = arr[i]
              answer++
       }
     }
   return answer;
  }