/* solution */

const solution = (str) => {
	     let count = 0      
         for (let el of str) {
          if (el === el.toUpperCase()) {
             count++
           }
        }
    return count
}
  
/* develop */

const solution = (str) => {
      let count = 0      
         for (let el of str) {
           let num = el.charCodeAt()
             console.log(num)
           // 아스킷 코드가 콘솔창에 찍힌다.
           // 대문자는 65 - 90, 26개
           // 소문자는 97 - 122 26개
         if(num >= 65 && num <= 90) count++
      }
    return count
  }