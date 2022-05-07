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
      if (persons.find((persona) => persona.id === id)) {
        resolve(persons.find((persona) => persona.id === id));
      }
    }, 3000);
  });

}

// code here
fetchPersonById(2)
  .then((yes) => console.log(yes))
  .catch((no) => console.log(no));
fetchPersonById(5)
  .then((yes) => console.log(yes))
  .catch((no) => console.log(no));
fetchPersonById(1)
  .then((yes) => console.log(yes))
  .catch((no) => console.log(no));
fetchPersonById(3)
  .then((yes) => console.log(yes))
  .catch((no) => console.log(no));
