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
      if(persons.find((element)=> element.id === id)){
        resolve(persons.find((element)=> element.id === id))
      }else{
        reject(new error('Noneee'))
      }
    }, 1000)
  })
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(jobs.find((element)=> element.id === id)){
        resolve(jobs.find((element) => element.id === id))
      }else{
        reject(new Error("Error"))
      }

    }, 500)
  })
}
Promise.race([
  fetchPersonById(2),
  fetchJobById(3)
])

.then((param)=> console.log(param))
.catch((param)=> console.log(param));