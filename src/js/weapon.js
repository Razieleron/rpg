export default function Weapon(name, type, modifier, baseDamageRatio) {
  this.name = name
  this.type = type
  this.modifier = modifier
  this.baseDamageRatio = baseDamageRatio
  // this.equipped = true;
}

// player {
//   inventory: {
//     this.contents = [Weapon, Weapon, Weapon]
//   }
// }

// player.inventory.contents[0].name