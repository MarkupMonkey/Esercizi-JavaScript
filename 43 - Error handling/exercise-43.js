class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new NegativeAmountError(); // Use custom Error class
      } else {
        this.#amount += amount;
      }
    }
    catch (er) {
      console.log(er.message)
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new NegativeAmountError(); // Use custom Error class
      } else if (this.#amount < amount) {
        throw new WithdrawNotPermittedError();
      } else {
        this.#amount -= amount; //this.#amout = this.#amount - amount
      }
    } catch (er) {
      console.log(er.message)
    }
  }
  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error {
  constructor(message = 'The amount provided cannot be negative') {
    super(message)
    this.name = "NegativeAmountError";
    this.message = message;
  }

}

class WithdrawNotPermittedError extends Error {
  constructor(message = 'Cannot withdraw more than your ammount') {
    super(message);
    this.name = "WithdrawNotPermittedError";
    this.message = message;
  }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(-200);
bankAccount.withdraw(10000);
bankAccount.view()