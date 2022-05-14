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
      const itemFound = persons.find(item => item.id === id);

      if (itemFound) {
        resolve(JSON.stringify(itemFound));
      }
      let myError = new Error(`Person with id: ${id} doesn't exist`);
      reject(myError);
    }, 1000);
  });
}

// fetchPersonById(2)
//   .then((personJson) => JSON.parse(personJson))
//   .then((person) => console.log(person))
//   .catch((err) => console.error(err));


async function asyncFetch(id) {
  const item = JSON.parse(await fetchPersonById(id));
  return item;
}


asyncFetch(1)
  .then(itemReturned => console.log(itemReturned))
  .catch(errorReturned => console.log(errorReturned))
asyncFetch(2)
  .then(itemReturned => console.log(itemReturned))
  .catch(errorReturned => console.log(errorReturned))
asyncFetch(3)
  .then(itemReturned => console.log(itemReturned))
  .catch(errorReturned => console.log(errorReturned))
asyncFetch(4)
  .then(itemReturned => console.log(itemReturned))
  .catch(errorReturned => console.log(errorReturned))