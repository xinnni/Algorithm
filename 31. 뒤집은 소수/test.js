/* solution */

const solution = (arr) => {
  let firArr = arr.join().split("").reverse();
  let secArr = firArr.join("").split(",").reverse();

  let result = [];
  for (let i = 0; i < secArr.length; i++) {
    if (isPrime(Number(secArr[i]))) {
      result.push(Number(secArr[i]));
    }
  }
  return result;
};

const isPrime = (num) => {
  let sum = parseInt(Math.sqrt(num));

  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i < sum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

/* develop(1) */

const solution = (arr) => {
  let firArr = arr.join().split("").reverse();
  let secArr = firArr.join("").split(",").reverse();

  let result = [];
  for (let i = 0; i < secArr.length; i++) {
    if (isPrime(Number(secArr[i]))) {
      result.push(Number(secArr[i]));
    }
  }
  return result;
};

const isPrime = (num) => {
  let sum = parseInt(Math.sqrt(num));

  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i < sum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

/* develop(2) */

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
