import Skill from './../src/js/skill.js';
import Weapon from "./../src/js/weapon.js";

describe('Skill', () => {
  test('should make a skill object', () => {
    const flurryOfArrows = new Skill('Flurry of Arrows', 1, 5, 'ranged')
    expect(flurryOfArrows.name).toEqual('Flurry of Arrows');
    expect(flurryOfArrows.actionPoints).toEqual(1);
    expect(flurryOfArrows.baseDamage).toEqual(5);
    expect(flurryOfArrows.range).toEqual('ranged');
  });
});