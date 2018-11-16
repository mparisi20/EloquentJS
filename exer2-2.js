// exercise 2-2: FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

// alternative solution
for (let i = 1; i <= 100; i++) {
  let str = "";
  str += (i % 3 == 0) ? "Fizz" : "";
  str += (i % 5 == 0) ? "Buzz" : "";
  console.log(str || i);
}
