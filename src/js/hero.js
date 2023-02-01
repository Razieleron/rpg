export default function Hero(name, sex, race, job, strength, intelligence, dexterity, stamina, adjStrength, adjIntelligence, adjDexterity, adjStamina) {
    this.name = name;
    this.sex = sex;
    this.race = race;
    this.job = job;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.stamina = stamina;
    this.adjStrength = adjStrength;
    this.adjIntelligence = adjIntelligence;
    this.adjDexterity = adjDexterity;
    this.adjStamina = adjStamina;
    /* this.equipment = equipment but have it be another object type?
     */
  }

  Hero.prototype.statAdjust = function() {
    /* istanbul ignore else */
    if (this.race === "Elf") {
      this.adjDexterity = this.dexterity * 1.5;
    } 
  }

  


/* 
if race = ogre, strength = strength * 1.5
if race = elf, dexterity = dexterity * 1.5
if race = dwarf, stamina = stamina * 1.5
if race = gnome, intelligence = intelligence * 1.5

hero obj, 
inventory obj  equipment obj, 
weapon obj, ammo obj, armor obj, 

weapons can use different base stats - like, bows and daggers use dexterity
so to calculate damage or w/e, we can create modifiers on the items that multiply the dexterity number or w/e.  so like a bow with 1.127x modifier is worse than a bow with 3.5x modifier.  

28dex x 1.127 = 31.556 vs 28dex x 3.5 = 106.4
then we can do a RNG thing to like, +- 10 or smth to that number so it's not always 106.4 or w/e

create ammo type for bow that does a thing.

battle system - 
hp/mp





can add inventory object and inject it into the Hero object, or items equipped object, or skills to perform object, etc. lots of things to do here, places to go, people to see.  you know, all that good stuff - slots, equipped stuff, etc.
*/