const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
//console.log(Object.values(person)); //['Mario', 'Rossi', 25]
  for (const value of Object.values(person)) {
    console.log(`${value}`);
  }
// Print values of person using Object.values