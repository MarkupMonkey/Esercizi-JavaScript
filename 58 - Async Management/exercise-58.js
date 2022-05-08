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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = (persons.find(item => item.id === id))
      if (person) {
        resolve(person);
      } else {
        reject(new Error(`questa persona non c'è`));
      }
    }, 1000);
  });
}

fetchPersonById(4)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));
fetchPersonById(1)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));
fetchPersonById(3)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));
fetchPersonById(2)
.then((itemReturned) => console.log(itemReturned))
.catch((errorReturned) => console.log(errorReturned));