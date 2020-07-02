// Your code here.
const range = (start, end, step) => {
  let array = [];
  for (let i = start, j = 0; i <= end; i += step || 1, j++)
    array[j] = i;
  if (start > end)
    for (let i = start, j = 0; i >= end; i += step || -1, j++)
      array[j] = i;
  return array;
}

const sum = (numbers) => {
  let res = 0;
  for (let number of numbers)
    res += number;
  return res;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55