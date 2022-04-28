class BankAccount {
    constructor(amount) {
        this.amount = amount;
    }
    deposit(q){
        this.amount += q;
    }
    withdraw(q){
        this.amount -= q;
    }
    view(){
        console.log(this.amount);
    }
}
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();