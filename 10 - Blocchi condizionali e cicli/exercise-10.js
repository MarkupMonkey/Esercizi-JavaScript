let i = 0;
function sumUntil(maxValue) {
  let sum = maxValue;
  let preSum = 1;
  for (let i = 1; i<= (maxValue -1); i++ ) {
      sum = sum + i;
      preSum = preSum + ' + ' + (i + 1);
  }
    return `${preSum} = ${sum}`
}

console.log(sumUntil(5));