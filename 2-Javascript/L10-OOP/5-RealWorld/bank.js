class WorldBank {
  constructor(balance) {
    this.balance = balance;
    this.statement = [balance];
  }
}
WorldBank.prototype.getBalance = function () {
  return `Your balance is ${this.balance} dollars`;
};
WorldBank.prototype.setBalance = function (value) {
  this.balance += value;
  return `You added ${value} to your account`;
};
WorldBank.prototype.updateStatement = function (value) {
  this.statement.push(value);
};
WorldBank.prototype.getStatement = function () {
  console.log('Here is your statement');
  this.statement.forEach(item => {
    console.log(item);
  });
};
// WorldBank.prototype.printStatement = function () {};
WorldBank.prototype.deposit = function (value) {
  this.setBalance(value);
  this.updateStatement(value);
  return `Completed`;
};
WorldBank.prototype.withdraw = function (value) {
  this.setBalance(-value);
  this.updateStatement(-value);
  return `Withdrawal Completed`;
};

const John = new WorldBank(200);
const Donnahue = new WorldBank(100);
console.log(John.withdraw(50));
John.getStatement();
console.log(John);
