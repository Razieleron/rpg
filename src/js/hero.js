export default function Hero(name, sex, race, job, strength, intelligence, dexterity, stamina) {
    this.name = name;
    this.sex = sex;
    this.race = race;
    this.job = job;
    this.strength = {};
    this.intelligence = {};
    this.dexterity = {};
    this.stamina = {};
  }


/* 
if race = ogre, strength = strength * 1.25
if race = elf, dexterity = dexterity * 1.25
if race = dwarf, stamina = stamina * 1.5
if race = gnome, intelligence = intelligence * 1.25

*/