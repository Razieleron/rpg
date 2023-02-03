import Hero from "./hero.js";
import Skill from "./skill.js";

export default class Weapon {
  constructor(name, type, modifier, baseDamageRatio) {
    this.name = name;
    this.type = type;
    this.modifier = modifier;
    this.baseDamageRatio = baseDamageRatio;
    this.skills = new Set([1,2,3,4]);
    
    // this.equipped = true;
  }
}

/*
let hero = new Hero
let hero.inventory = new Inventory();
let weapon = new Weapon
let skill = new Skill
hero.inventory.weapon.skill

weapon.skills.push(flurryOfArrows)

angelBow.skills.push(flurryOfArrow)
*/


//hero.inventory.
//this.contents[Weapon.name];
// player {
//   inventory: {
//     this.contents = [Weapon, Weapon, Weapon]
//   }
// }

// player.inventory.contents[0].name