let person = {
  name: 'John',
  age: 22,
  profession: 'programmer'
}
console.log(`Hello my name is ${person.name}, I am ${person.age} years old and I am a ${person.profession}.`)


// Star shape
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; i++) {
    console.log("#");
  }
  console.log("\n");
}