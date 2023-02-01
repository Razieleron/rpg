import Inventory from "../src/js/inventory.js";
import Weapon from "../src/js/weapon.js";

describe('Inventory', () => {
  let inventory;
    beforeEach(() => {
      inventory = new Inventory()
    });  
  
  test('should create an inventory system', () => {
      const inventory = new Inventory()
      expect(inventory.contents).toEqual([])
    });
    
  test('should add an item to the inventory', () => {
      const inventory = new Inventory();
      inventory.addItem("sock");
      expect(inventory.contents).toEqual(["sock"])
    });

    test('should add a item of type weapon to the inventory', () => {
      const inventory = new Inventory;
      const weapon = new Weapon("Goredrinker");
      inventory.addItem(weapon.name);
      expect(inventory.contents).toEqual(["Goredrinker"])

    });
});


