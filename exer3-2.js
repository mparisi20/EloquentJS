// exercise 3-2: Recursion
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else
    return (n > 0) ? isEven(n - 2) : isEven(n + 2);
}

console.log(isEven(-50));
// → true
console.log(isEven(26));
// → true
console.log(isEven(9));
// → false
console.log(isEven(-85));
// → false