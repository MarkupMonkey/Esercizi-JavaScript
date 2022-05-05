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
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

async function asyncFetch (){
  const item = await fetchPersonById(2);
  const item2 = await JSON.parse(item);
  console.log(item2);
}


asyncFetch().catch((error) => console.log(error));

// async function asyncFetch(2) {
//   let personJson = await fetchPersonById(personJson);
//   console.log(personJson);
//   let person = await Promise(person);
//   console.log(person);
//   let err = await 
// }
  // .then((personJson) => JSON.parse(personJson))
  // .then((person) => console.log(person))
  // .catch((err) => console.error(err));