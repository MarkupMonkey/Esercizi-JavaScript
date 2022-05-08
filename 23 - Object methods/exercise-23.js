const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// for (let keys in person){
//   console.log(Object.key(person)[i] + ":" (Object.values(person)[i]);
//   i++
// }

// Object.entries


for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Print values of person using Object.keys