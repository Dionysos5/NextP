//Eloquent Javascript exercises

//Chapter 3 : Functions
//Exercise 1: Minimum

let min = function (a, b) {
  if (a < b)
    return a;
  return b;
}

min = (a, b) => {
  if (a < b)
    return a;
  return b;
}

// function min(a, b) {
//   if (a < b)
//     return a;
//   return b;
//    }

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


//Chapter 3 : Functions
//Exercise 3: Bean counting

const countBs = (string) => {
  let numberOfB = 0;
  for (let count = 0; count < string.length; count++)
    if (string[count] === 'B')
      numberOfB++;
  return numberOfB;
}

const countChar = (string, char) => {
  let numberOfChar = 0;
  for (let count = 0; count < string.length; count++)
    if (string[count] === char)
      numberOfChar++;
  return numberOfChar;
}
