class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {

        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      } else {
        this.#amount += amount;
      }
    }
    catch (er) {
      console.log(er.message)
      amount = 0;
    }
  }



  withdraw(amount) {
    try { 
      if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    } else if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('The amount provided cannot be negative');
    } else {
      this.#amount -= amount;
    }
  } catch(er) {
    console.log(er.message)
    amount = 0;
  }
}
  view() {
  console.log(this.#amount);
  }
}


  // if(this.#amount <amount) {
  //   throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
  // }
  //   this.#amount -= amount;
  // }



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