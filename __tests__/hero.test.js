import Hero from './../src/js/hero.js';

describe('Hero', () => {
  test('should create a hero with filled out attributes', () => {
      const hero = new Hero('Raina Lightfoot', 'Female', 'Elf', 'Archer', 10, 12, 18, 9)
    expect(hero.name).toEqual('Chuck Norris');
  });
});