import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Player } from '../components/interface/Player'
import type { Monster } from '../components/interface/Bestiary'
import { monsters } from '../components/interface/Bestiary'
import { useGameStateStore } from './gameStateStore'

export const useCombatStore = defineStore('combat', () => {
  const player = ref<Player | null>(null)
  const monster = ref<Monster | null>(null)
  const combatResult = ref<string | null>(null)
  const secondaryAttackCooldown = ref(2) // Initial cooldown for secondary attack
  const specialAttackCooldown = ref(4) // Initial cooldown for special attack
  const isCombatEnded = ref(false)

  const gameStateStore = useGameStateStore()

  const isPlayerDead = computed(
    () => player.value?.life !== undefined && player.value.life <= 0
  )
  const isMonsterDead = computed(
    () => monster.value?.life !== undefined && monster.value.life <= 0
  )

  function setPlayer(newPlayer: Player) {
    player.value = newPlayer
  }

  function setMonster(newMonster: Monster) {
    monster.value = newMonster
  }

  function setCombatResult(result: string) {
    combatResult.value = result
  }

  function applyDamage(target: 'player' | 'monster', damage: number) {
    if (target === 'player' && player.value) {
      player.value.life = Math.max(0, player.value.life - damage)
    } else if (target === 'monster' && monster.value) {
      monster.value.life = Math.max(0, monster.value.life - damage)
    }
    checkCombatEnd()
  }

  function checkCombatEnd() {
    if (isPlayerDead.value) {
      setCombatResult('Game Over! Player has died.')
      isCombatEnded.value = true
    } else if (isMonsterDead.value) {
      setCombatResult('Victory! Monster has been defeated.')
      isCombatEnded.value = true
    }
  }

  function monsterAttack() {
    if (!player.value || !monster.value || isCombatEnded.value) return

    const monsterAttackRoll =
      Math.floor(Math.random() * 20) +
      1 +
      monster.value.attackPower +
      monster.value.awareness / 2
    const playerDefenseRoll =
      Math.floor(Math.random() * 20) +
      1 +
      player.value.defenseRating +
      player.value.awareness / 2

    if (monsterAttackRoll >= playerDefenseRoll) {
      const damage = Math.max(
        1,
        Math.floor(
          monster.value.attackPower / 10 +
            Math.floor(Math.random() * 10) +
            1 -
            player.value.defenseRating / 20
        )
      )
      applyDamage('player', damage)
      setCombatResult(`Monster hits Player for ${damage} damage!`)
    } else {
      setCombatResult('Monster misses!')
    }
  }

  function incrementTurn() {
    console.log('incrementTurn called')
    console.log(
      'Before increment - Secondary cooldown:',
      secondaryAttackCooldown.value
    )
    console.log(
      'Before increment - Special cooldown:',
      specialAttackCooldown.value
    )

    if (!isCombatEnded.value) {
      gameStateStore.incrementTurn()
      if (secondaryAttackCooldown.value > 0) secondaryAttackCooldown.value--
      if (specialAttackCooldown.value > 0) specialAttackCooldown.value--

      console.log(
        'After decrement - Secondary cooldown:',
        secondaryAttackCooldown.value
      )
      console.log(
        'After decrement - Special cooldown:',
        specialAttackCooldown.value
      )

      monsterAttack()
    }

    console.log('End of incrementTurn')
  }

  function primaryAttack() {
    console.log('Primary Attack called')
    console.log(
      'Before Primary Attack - Secondary cooldown:',
      secondaryAttackCooldown.value
    )
    console.log(
      'Before Primary Attack - Special cooldown:',
      specialAttackCooldown.value
    )

    if (isCombatEnded.value || !player.value || !monster.value) {
      return
    }

    const playerAttackRoll =
      Math.floor(Math.random() * 20) +
      1 +
      player.value.attackPower +
      player.value.awareness / 2
    const monsterDefenseRoll =
      Math.floor(Math.random() * 20) +
      1 +
      monster.value.defenseRating +
      monster.value.awareness / 2

    if (playerAttackRoll >= monsterDefenseRoll) {
      const damage = Math.max(
        1,
        Math.floor(
          player.value.attackPower / 10 +
            Math.floor(Math.random() * 10) +
            1 -
            monster.value.defenseRating / 20
        )
      )
      applyDamage('monster', damage)
      setCombatResult(
        `Player hits Monster with Primary Attack for ${damage} damage!`
      )
    } else {
      setCombatResult('Player misses with Primary Attack!')
    }

    incrementTurn()

    console.log(
      'After Primary Attack - Secondary cooldown:',
      secondaryAttackCooldown.value
    )
    console.log(
      'After Primary Attack - Special cooldown:',
      specialAttackCooldown.value
    )
  }

  function secondaryAttack() {
    console.log(
      'Secondary Attack Cooldown before:',
      secondaryAttackCooldown.value
    )

    if (isCombatEnded.value || secondaryAttackCooldown.value > 0) {
      setCombatResult('Secondary Attack is on cooldown!')
      console.log('Secondary Attack blocked due to cooldown or combat ended')
      return
    }

    if (!player.value || !monster.value) return

    const playerAttackRoll =
      Math.floor(Math.random() * 20) +
      1 +
      player.value.attackPower +
      player.value.awareness / 2
    const monsterDefenseRoll =
      Math.floor(Math.random() * 20) +
      1 +
      monster.value.defenseRating +
      monster.value.awareness / 2

    if (playerAttackRoll >= monsterDefenseRoll) {
      const damage = Math.max(
        1,
        Math.floor(
          player.value.attackPower / 8 +
            Math.floor(Math.random() * 10) +
            1 -
            monster.value.defenseRating / 20
        )
      )
      applyDamage('monster', damage)
      setCombatResult(
        `Player hits Monster with Secondary Attack for ${damage} damage!`
      )
      console.log('Secondary Attack hit for', damage, 'damage')
    } else {
      setCombatResult('Player misses with Secondary Attack!')
      console.log('Secondary Attack missed')
    }

    secondaryAttackCooldown.value = 2
    console.log(
      'Secondary Attack Cooldown set to:',
      secondaryAttackCooldown.value
    )

    incrementTurn()
    console.log(
      'Secondary Attack Cooldown after turn increment:',
      secondaryAttackCooldown.value
    )
  }

  function specialAttack() {
    console.log('Special Attack Cooldown before:', specialAttackCooldown.value)

    if (isCombatEnded.value || specialAttackCooldown.value > 0) {
      setCombatResult('Special Attack is on cooldown!')
      console.log('Special Attack blocked due to cooldown or combat ended')
      return
    }

    if (!player.value || !monster.value) return

    const playerAttackRoll =
      Math.floor(Math.random() * 20) +
      1 +
      player.value.attackPower +
      player.value.awareness / 2
    const monsterDefenseRoll =
      Math.floor(Math.random() * 20) +
      1 +
      monster.value.defenseRating +
      monster.value.awareness / 2

    if (playerAttackRoll >= monsterDefenseRoll) {
      const damage = Math.max(
        1,
        Math.floor(
          player.value.attackPower / 5 +
            Math.floor(Math.random() * 10) +
            1 -
            monster.value.defenseRating / 20
        )
      )
      applyDamage('monster', damage)
      setCombatResult(
        `Player hits Monster with Special Attack for ${damage} damage!`
      )
      console.log('Special Attack hit for', damage, 'damage')
    } else {
      setCombatResult('Player misses with Special Attack!')
      console.log('Special Attack missed')
    }

    specialAttackCooldown.value = 4
    console.log('Special Attack Cooldown set to:', specialAttackCooldown.value)

    incrementTurn()
    console.log(
      'Special Attack Cooldown after turn increment:',
      specialAttackCooldown.value
    )
  }

  function skipTurn() {
    if (!isCombatEnded.value) {
      setCombatResult('Player skipped the turn.')
      incrementTurn()
    }
  }

  const canUseSecondaryAttack = computed(
    () => secondaryAttackCooldown.value === 0 && !isCombatEnded.value
  )
  const canUseSpecialAttack = computed(
    () => specialAttackCooldown.value === 0 && !isCombatEnded.value
  )

  return {
    player,
    monster,
    combatResult,
    secondaryAttackCooldown,
    specialAttackCooldown,
    isCombatEnded,
    isPlayerDead,
    isMonsterDead,
    setPlayer,
    setMonster,
    setCombatResult,
    primaryAttack,
    secondaryAttack,
    specialAttack,
    skipTurn,
    canUseSecondaryAttack,
    canUseSpecialAttack,
    incrementTurn, // Ensure this is included in the return statement
  }
})
