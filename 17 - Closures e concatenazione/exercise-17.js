function calculate() {
  return new Object({
  tot:0,
    add(number){
      this.tot += number;
      return this;
    },

    multiply(number){
      this.tot *= number;
      return this;
    },

    sub(number){
      this.tot -= number;
      return this;
    },

    divide(number){
      this.tot /= number;
      return this;
    },

    printResult(){
      return this
    },
    
  });
}
const calculator = calculate();

console.log(calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult()); // Il risultato sarà: 7