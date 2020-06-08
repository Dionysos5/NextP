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