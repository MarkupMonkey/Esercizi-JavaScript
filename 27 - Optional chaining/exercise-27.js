const person = {
  firstName: 'John',
  lastName: 'Doe'
};
const personCity = person?.city ?? 'Unknown city';
console.log(personCity);
console.log(person.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined