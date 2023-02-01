import Weapon from './../src/js/weapon.js';

describe('Weapon', () => {
  test('should create a weapon with filled out attributes', () => {
    const angelBow = new Weapon("Angel's Bow", "Bow", ["dexterity", "intelligence"], 2.43)
    expect(angelBow.name).toEqual("Angel's Bow");
});
});