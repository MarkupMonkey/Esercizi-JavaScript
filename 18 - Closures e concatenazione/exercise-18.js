const memoize = (fn) => {
  let cache = {};
  return (...args) => { //return function(...args) 
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      console.log(cache)
      return cache[n];
    }
    else {
      console.log('Calculating result', n);
      let result = fn(n); // <-- chiama factorial(x)
      if (!(n in cache)) { //se non è in cache 
        cache[n] = result;// salva "result"
      }
      console.log(cache)
      return result;
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
  //primo giro: 3 x (result factorial 3 - 1)
  //secondo giro: factorial(2) 2 x (result factorial 2 - 1)
  //terzo giro: factorial(1) 1 x (result factorial 1 - 1)
  //quartogiro: factorial(0) if x == 0 --------> 1
  //primo return finale: 3 x 2 x 1 x 1 ==> 6
}
// console.log('il risultato è ',factorial(100));
// console.log('il risultato è ',factorial(7));
console.log('il risultato è ',factorial(10));
console.log('il risultato è ',factorial(5));
console.log('il risultato è ',factorial(2)); //fin qui factorial è chiamato senza memoize
factorial = memoize(factorial);
console.log('------ ribattezzo factorial con la mask cache---------'); //factorial ribattezzato con lo strato 'cache' mask 
console.log('il risultato è ',factorial(10));
console.log('il risultato è ',factorial(5));//<-------da qui factorial viene chiamato con memoize
console.log('il risultato è ',factorial(2));
// console.log('il risultato è ',factorial(7));
//console.log('il risultato è ',factorial(6));