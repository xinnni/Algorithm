/* solution */

const solution = (str) => {
  let answer = "YES";
  let reverseStr = str.toUpperCase().split("").reverse().join("");
  if (str.toUpperCase() !== reverseStr) {
    answer = "NO";
  }
  return answer;
};

/* develop(1) */

const solution = (str) => {
  let answer = "YES";
  let len = str.length;
  str = str.toLowerCase();
  for (let i = 0; i < parseInt(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) return (answer = "NO");
  }
  return answer;
};

/* develop(2) */

const solution = (str) => {
  let answer = "YES";
  str = str.toLowerCase();

  if (str.split("").reverse().join("") !== str) return (answer = "NO");

  return answer;
};
