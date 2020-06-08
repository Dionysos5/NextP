//Eloquent Javascript exercises

//Chapter 2 : Code structure
//Exercise 1: Triangle shape
let count = 7;
//Triangle with for loop
for (let hashes = ''; hashes.length <= count; hashes += '#') {
  console.log(hashes);
}
let hashes = '';
//Triangle with while loop
while (hashes.length <= count) {
  hashes += '#';
  console.log(hashes);
}

//Chapter 2 : Code structure
//Exercise 2: FizzBuzz

for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0)
    console.log('FizzBuzz');
  else if (number % 3 != 0 && number % 5 == 0)
    console.log('Buzz');
  else if (number % 3 == 0)
    console.log('Fizz');
  else
    console.log(number);
}

//Chapter 2 : Code structure
//Exercise 3: Chessboard
let chessboard = '';
const size = 32;
for (let rows = 1; rows <= size; rows++) {
  for (let columns = 1; columns <= size; columns++) {
    if (columns % 2 != 0 && rows % 2 != 0)
      chessboard += ' ';
    else if (columns % 2 == 0 && rows % 2 == 0)
      chessboard += ' ';
    else
      chessboard += '#';

  }
  chessboard += '\n';
}

console.log(chessboard);