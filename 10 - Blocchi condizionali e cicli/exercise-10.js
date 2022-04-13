let i = 0;
function sumUntil(maxValue) {
  let sum = 0;
  let preSum = '';
  for (let i = 1; i<= (maxValue); i++ ) {
      sum = sum + i;
      preSum = preSum + ' + ' + i;
  }
    return `${preSum} = ${sum}`
}

console.log(sumUntil(5));