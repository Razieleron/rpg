import Inventory from "../src/js/inventory.js";

describe('Inventory', () => {
    test('should create an inventory system', () => {
        const inventory = new Inventory()
        expect(inventory.contents).toEqual([])
    });
    
    test('should add an item to the inventory', () => {
      const inventory = new Inventory();
      inventory.addItem("sock");
      expect(inventory.contents).toEqual(["sock"])
    });
});


