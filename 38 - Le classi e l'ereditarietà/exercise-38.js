class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
  get() {
    return this.#amount;
 }
}

class BankAccountVip extends BankAccount {
 
  constructor(initialAmount) {
    super(initialAmount);

  }

  deposit(amount) {
    if (super.get() >= 1000) {
      super.deposit((103 * amount) / 100);
    } else {
      super.deposit(amount);
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.view();
bankAccountVip.deposit(500);
bankAccountVip.view();
bankAccountVip.deposit(1200);
bankAccountVip.view();
bankAccountVip.withdraw(800);
bankAccountVip.view();
bankAccountVip.deposit(3500);
bankAccountVip.view();