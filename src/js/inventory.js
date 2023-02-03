export default class Inventory {
  constructor() {
    this.contents = [];
  }
  addItem(item) {
    this.contents.push(item);
  }
}

// function Equipment() {
//   this.head = {};
//   this.body = {};
//   this.legs = {};
//   this.rightHand = {};
//   this.leftHand = {};
// }