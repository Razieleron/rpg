export default function Hero(name, sex, race, job, strength, intelligence, dexterity, stamina) {
    this.name = name;
    this.sex = sex;
    this.race = race;
    this.job = job;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.stamina = stamina;
  }


/* 
if race = ogre, strength = strength * 1.25
if race = elf, dexterity = dexterity * 1.25
if race = dwarf, stamina = stamina * 1.5
if race = gnome, intelligence = intelligence * 1.25

can add inventory object and inject it into the Hero object, or items equipped object, or skills to perform object, etc. lots of things to do here, places to go, people to see.  you know, all that good stuff - slots, equipped stuff, etc.
*/