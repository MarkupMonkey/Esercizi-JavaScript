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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemFound = persons.find((item) => item.id === id)) {
        resolve(itemFound)
      } else {
        reject(new error("Person not found"))
      }
    }, 1000)
  })
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobFound = jobs.find((item) => item.id === id)) {
        resolve(jobFound)
      } else {
        reject(new Error("Job not found"))
      }
    }, 500)
  })
}

Promise.race([
  fetchPersonById(2),
  fetchJobById(3)
])
  .then((firstItemReturned) => console.log(firstItemReturned))
  .catch((firstErrorReturned) => console.log(firstErrorReturned));