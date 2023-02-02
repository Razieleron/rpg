export default function Inventory() {
    this.contents = []
}

Inventory.prototype.addItem = function(item) {
  this.contents.push(item);
}

// function Equipment() {
//   this.head = {};
//   this.body = {};
//   this.legs = {};
//   this.rightHand = {};
//   this.leftHand = {};
// }