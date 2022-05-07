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
      if (persons.find((persona) => persona.id === id)) {
        resolve(persons.find(item => item.id === id));
      } else {
        reject(new Error(`questa persona non c'è`));
      }
    }, 1000);
  });
}

fetchPersonById(4)
.then((person) => console.log(person))
.catch((person) => console.log(person));
fetchPersonById(1)
.then((person) => console.log(person))
.catch((person) => console.log(person));
fetchPersonById(3)
.then((person) => console.log(person)) 
.catch((person) => console.log(person));
fetchPersonById(2)
.then((person) => console.log(person)) 
.catch((person) => console.log(person));