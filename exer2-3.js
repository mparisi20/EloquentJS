// exercise 2-3: Chessboard
let size = 8;
let grid = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    grid += (i % 2 == j % 2) ? " " : "#";
  }
  grid += "\n";
}
console.log(grid);
