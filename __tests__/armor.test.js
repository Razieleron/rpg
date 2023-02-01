import Armor from './../src/js/armor.js';

describe('Armor', () => {
    test('this test should create a piece of armor with its stats', () => {
        const angelArmor = new Armor("Angel's Armor", "Chestplate", ["elf", "female"], 0.83)
        expect(angelArmor.name).toEqual("Devil's Armor");
    });
  });