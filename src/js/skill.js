// whatever we're gonna import


export default class Skill {
  constructor(name, actionPoints, baseDamage, range) {
    this.name = name
    this.actionPoints = actionPoints;
    this.baseDamage = baseDamage;
    this.range = range;
  }
}

/* so the skill just is like a skill.  we're not linking it to anything at all right now.  it's just the parameters of the skill itself so like, 
action points, damageRange, melee:false, ranged:true

let flurryOfArrows = new Skill(1, baseDamage, melee:false, ranged:true)
let pointBlankShot = new Skill(2, damage, melee:true, ranged:false)

if orc is wearing anti-arrow armor, then damage = baseDamage * .7
*/