class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      try {
        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      }
      catch (er) {
        console.log(er.message)
        amount = 0;
      }
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      try {
        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      }
      catch (er) {
        console.log(er.message)
        amount = 0;
      }
    }

    if (this.#amount < amount) {
      try {
        throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
      } catch (er) {
        console.log(er.name)
        console.log(er.message)
        amount = 0;
      }
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}


class NegativeAmountError extends Error {
  constructor(message) {
    super(message)
    this.name = "NegativeAmountError";
    this.message = message;
  }

}

class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = "WithdrawNotPermittedError";
    this.message = message;
  }
}





const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view()