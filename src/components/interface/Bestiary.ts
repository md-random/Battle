// src/interface/Bestiary.ts

export interface Monster {
  name: string
  type: string
  attackStyle: string
  life: number
  attackPower: number
  defenseRating: number
  awareness: number
  image: string
  primaryAttack: string
  secondaryAttack: string
  specialAttack: string
}

export const monsters: Monster[] = [
  {
    name: 'Chaos Orc',
    type: 'Orc',
    attackStyle: 'Melee',
    life: 120,
    attackPower: 90,
    defenseRating: 60,
    awareness: 70,
    image: 'chaos-orc.jpeg',
    primaryAttack: 'Brutal Cleave',
    secondaryAttack: 'Chaos Throw',
    specialAttack: 'Berserk Rage',
  },
  // Add more monsters as needed
]
