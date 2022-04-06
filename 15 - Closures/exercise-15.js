// function pow(base) {
//   return function exp(expo){
//     return base ** exponent
//   }
// }
const pow = (base) => exp = expo => base ** expo
const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));