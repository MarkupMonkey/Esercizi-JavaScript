const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person?.firstName);
console.log(person?.lastName);
console.log(person.address?.city); 
console.log(person.fullName?.()); 