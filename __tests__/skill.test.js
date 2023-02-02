import Skill from './../src/js/skill.js';

describe('Skill', () => {
  test('should make a skill object', () => {
    const flurryOfArrows = new Skill(1, 5, 'ranged')
    expect(flurryOfArrows.actionPoints).toEqual('a bajillion');
  });
});