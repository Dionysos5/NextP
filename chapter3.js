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
//    }

min = (a, b) => {
  if (a < b)
    return a;
  return b;
}

//Chapter 3 : Functions
//Exercise 2: Recursion
let isEven = (number) => {
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else {
    if (number < 0)
      return isEven(-number + 2);
    else
      return isEven(number - 2);
  }

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
