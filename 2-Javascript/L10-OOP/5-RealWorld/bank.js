class WorldBank {
  constructor(balance) {
    this.balance = balance;
    this.statement = [balance];
  }
}
WorldBank.prototype.getBalance = function () {};
WorldBank.prototype.setBalance = function (value) {};
WorldBank.prototype.updateStatement = function (value) {};
WorldBank.prototype.getStatement = function () {};
WorldBank.prototype.printStatement = function () {};
WorldBank.prototype.deposit = function (value) {};
WorldBank.prototype.withdraw = function (value) {};

const John = new WorldBank(200);
console.log(John.getBalance());
