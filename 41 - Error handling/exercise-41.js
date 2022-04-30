class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount >= 0) {
      this.#amount += amount;
    } else {
      throw new Error(' ERRORE Error:  negative amount');
    }

  }

  withdraw(amount) {
    if (amount >= 0) {
      if (amount <= this.#amount) {
        this.#amount -= amount;
      } else {
        throw new Error(' ERRORE ');// throw an exception if amount is negative or if withdrawal amount is greater than current amount
      }
    } else {
      throw new Error('error: negative amount');
    }

  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(-200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();