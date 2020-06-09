//Eloquent Javascript exercises

//Chapter 3 : Functions
//Exercise 1: Minimum

let min = function (a, b) {
  if (a < b)
    return a;
  return b;
}

// function min(a, b) {
//   if (a < b)
//     return a;
//   return b;
// }

min = (a, b) => {
  if (a < b)
    return a;
  return b;
}

console.log(min(9, -6));