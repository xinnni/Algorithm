/* solution */

const solution = (str) => {
  let answer = "YES";
  str = str.toUpperCase().replace(/[^A-Z]/g, "");
  if (str !== str.split("").reverse().join("")) return (answer = "NO");
  return answer;
};
