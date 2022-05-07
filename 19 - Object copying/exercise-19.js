const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1
//-------Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon',
// const person2 = {
//   firstName: 'Simon',
//   lastName: 'Doe',
//   age: 28
// }
console.log(person1);
console.log(person2);
// Modificando l'oggetto "person2" si modifica anche "person1" perchè l'avevamo posto uguale a "person2"