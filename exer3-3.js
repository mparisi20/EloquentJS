// exercise 3-3: Bean Counting
function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, c) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c) {
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4