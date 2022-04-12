const person = {
  firstName: 'Marco',
  lastName: 'Moncada',
  address : {
    city: 'Siracusa',
    cap: '96100',
    street: 'via Grottasanta 61',
  },
    get fullName(){
    return `${this.firstName} ${this.lastName}`
    },
    set fullName(name) {
    [this.firstName,this.lastName] = name.split(' ')
  }
}

const marco = new Object(person);
console.log('--- CITY ---')

console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
console.log('--- FULLNAME ---')
console.log(person.fullName); // Argh! Cannot read property 'fullName()' of undefined