import Hero from './../src/js/hero.js';
import Inventory from "./../src/js/inventory.js";
import Weapon from "./../src/js/weapon.js";

describe('Hero', () => {
  test('should create a hero with filled out attributes', () => {
      const hero = new Hero('Raina Lightfoot', 'Female', 'Elf', 'Archer', 10, 12, 18, 9)
    expect(hero.name).toEqual('Raina Lightfoot');
    expect(hero.sex).toEqual('Female');
    expect(hero.race).toEqual('Elf');
    expect(hero.job).toEqual('Archer');
    expect(hero.strength).toEqual(10);
    expect(hero.intelligence).toEqual(12);
    expect(hero.dexterity).toEqual(18);
    expect(hero.stamina).toEqual(9);
  });

  test('should create adjusted stats based on race modifiers', () => {
    const hero = new Hero('Raina Lightfoot', 'Female', 'Elf', 'Archer', 10, 12, 18, 9, 10, 12, 18, 9)
    hero.statAdjust();
    expect(hero.adjDexterity).toEqual(27);
  });
});

  test('should create an inventory object within a hero object', () => {
    const hero = new Hero('Raina Lightfoot', 'Female', 'Elf', 'Archer', 10, 12, 18, 9, 10, 12, 18, 9)
    const inventory = new Inventory();
    hero.inventory = inventory;
    expect(hero.inventory).toEqual({"contents": []});
  })
