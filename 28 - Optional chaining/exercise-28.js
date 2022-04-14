const order = {
  // customer: {
  //   address:{
  //     region: 'Sicily',
  //     city: 'Serausa',
  //     street: 'Via Grottasanta',
  //   }
  // }
};
let city = order?.customer?.address?.city; 
console.log(order?.customer?.address?.city);
if (city === undefined) {
 console.log('City is required');
}
