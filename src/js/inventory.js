export default function Inventory() {
    this.contents = []
}

Inventory.prototype.addItem = function(item) {
  this.contents.push(item);
}

