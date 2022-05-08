const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const person = persons.find((persona) => persona.id === id)
      if (person) {
        resolve(person);
      }
    }, 3000);
  });

}

// code here
fetchPersonById(2)
  .then((itemReturned) => console.log(itemReturned))
  .catch((errorReturned) => console.log(errorReturned));
fetchPersonById(5)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));
fetchPersonById(1)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));
fetchPersonById(3)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));
