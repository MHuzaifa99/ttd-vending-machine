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
}