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
  selectItem(code) {
    let check = false
    let changeReturn = [20, 10]
    for (let i in this.items) {
      if (code == i) {
        check = true
        break
      }
    }
    if (check) {
      if (this.items[code].price > this.totalDeposit) {
        return `Your deposit is insufficient.  Please add Rs ${this.items[code].price - this.totalDeposit} for this item`
      }
      if (this.items[code].price <= this.totalDeposit) {
        let change = this.totalDeposit - this.items[code].price
        change = this.changeFun(change)
        if (JSON.stringify(change) === JSON.stringify(changeReturn)) {
          return {
            item: this.items[code].name,
            change: change == [] ? [] : change
        }
        }
        return 'Cannot return proper change. Please choose another item or cancel the transaction'
      }

    }
    return "The item you selected is unavailable";
  }

  cancel() {
    return { change: this.changeFun(this.totalDeposit) }
  }

  changeFun(change) {
    let changeArr = []

    if (change >= 100) {
      change = change - 100
      console.log(change)
      changeArr.push(100)
      this.changeFun(change)
    }
    if (change >= 50) {
      console.log({ change })
      change = change - 50
      changeArr.push(50)
      this.changeFun(change)
    }
    if (change >= 20) {
      change = change - 20
      changeArr.push(20)
      this.changeFun(change)
    }
    if (change >= 10) {
      change = change - 10
      changeArr.push(10)
      this.changeFun(change)
    }
    return changeArr
  }
}