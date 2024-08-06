<template>
  <div class="combat-manager">
    <div class="stats">
      <div v-if="player">
        <h3>Player</h3>
        <p>Life: {{ player.life }}</p>
        <p>Attack Power: {{ player.attackPower }}</p>
      </div>
      <div v-if="monster">
        <h3>{{ monster.name }}</h3>
        <p>Life: {{ monster.life }}</p>
        <p>Defense Rating: {{ monster.defenseRating }}</p>
      </div>
    </div>

    <div class="controls" v-if="!isCombatEnded">
      <button @click="skipTurn">Skip Turn</button>
      <button @click="primaryAttack">Primary Attack</button>
      <button @click="secondaryAttack" :disabled="!canUseSecondaryAttack">
        Secondary Attack
      </button>
      <button @click="specialAttack" :disabled="!canUseSpecialAttack">
        Special Attack
      </button>
    </div>

    <div v-if="isCombatEnded" class="combat-ended">
      <h2>Combat Ended</h2>
      <p v-if="isPlayerDead">Game Over! Player has died.</p>
      <p v-if="isMonsterDead">Victory! Monster has been defeated.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCombatStore } from '../stores/combatStore'
import { useGameStateStore } from '../stores/gameStateStore'
import { storeToRefs } from 'pinia'
import type { Player } from '../components/interface/Player'
import { monsters } from '../components/interface/Bestiary'

const combatStore = useCombatStore()
const gameStateStore = useGameStateStore()

const {
  player,
  monster,
  playerCombatResult,
  monsterCombatResult,
  isCombatEnded,
  isPlayerDead,
  isMonsterDead,
  canUseSecondaryAttack,
  canUseSpecialAttack,
} = storeToRefs(combatStore)

const { skipTurn, primaryAttack, secondaryAttack, specialAttack } = combatStore

const { turnCount } = storeToRefs(gameStateStore)

onMounted(() => {
  const initialPlayer: Player = {
    name: 'Player',
    type: 'Human',
    attackStyle: 'Melee',
    life: 100,
    attackPower: 75,
    defenseRating: 50,
    awareness: 80,
    image: 'player-warrior.jpeg',
    primaryAttack: 'Sword Slash',
    secondaryAttack: 'Shield Bash',
    specialAttack: 'Heroic Strike',
  }

  combatStore.setPlayer(initialPlayer)
  combatStore.setMonster(monsters[0])
})
</script>

<style scoped>
.combat-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.controls {
  margin-top: 20px;
}

.combat-results {
  margin-top: 20px;
}

.player-combat-result,
.monster-combat-result {
  font-weight: bold;
}

.turn-counter {
  margin-top: 10px;
}

.combat-ended {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  color: red;
}
</style>
