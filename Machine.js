module.exports = class Machine {
  constructor() {
    this.items = [
      { name: "crisps", price: 100 },
      { name: "chocolate", price: 350 },
      { name: "mints", price: 70 },
    ];
    this.totalDeposit = 0;
  }
  seeSelections() {
    return this.items.map((item) => ({ [item.name]: `Rs ${item.price}` }));
  }
  deposit(money) {
    if (money == 100 || 500 || 10 || 20 || 50) {
      this.totalDeposit += money;
      return `You have deposited Rs ${this.totalDeposit}`;
    }
  }
}