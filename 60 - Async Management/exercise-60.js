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

function fetchPersonById(id){
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      const person = persons.find((person)=> person.id === id)
      if(person){
        resolve(person)
      }else{
        reject(new error('Person not found'))
      }
    }, 1500)
  })
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const job = jobs.find((element)=> element.id === id)
      if(job){
        resolve(job)
      }else{
        reject(new Error("Job not found"))
      }

    }, 1000)
  })
}
Promise.all([
  fetchPersonById(2),
  fetchJobById(1),

]).then((itemReturned) => console.log(itemReturned))
  .catch((errorReturned) => console.log(errorReturned));
