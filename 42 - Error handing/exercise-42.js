class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {

      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      } else {

        this.#amount += amount;
      }
    }
    catch (er) {
      console.log('The amount provided cannot be negative');
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }

      if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance');
      } else {
        this.#amount -= amount;
      }
    }
    catch (er) {
      if (er === 'The amount provided cannot be negative') {
        console.log('The amount provided cannot be negative')
      } else {
        console.log('You cannot withdraw more than account balance')
      }

    }
  }


  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(-200);
bankAccount.withdraw(-10000);
bankAccount.view();