import Inventory from "../src/js/inventory.js";

describe('Inventory', () => {
    test('should create an inventory system', () => {
        const inventory = new Inventory()
        expect(inventory.contents).toEqual(2)
    });
});

