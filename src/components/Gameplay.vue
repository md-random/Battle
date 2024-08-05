<template>
  <div class="gameplay-container">
    <div class="gameplay-grid">
      <div class="grid-item grid-item-1">1</div>
      <div class="combat-manager grid-item grid-item-2">
        <CombatManager />
      </div>
      <div class="grid-item grid-item-3">
        <div v-if="combatResult" class="combat-result">
          {{ combatResult }}
        </div>
      </div>
      <div class="grid-item grid-item-4">
        <div class="version">Version 1.3</div>
      </div>
      <div class="player-info grid-item grid-item-5">
        <Player :showImage="false" />
      </div>
      <div class="player-image grid-item grid-item-6">
        <Player :showImage="true" :showInfo="false" />
      </div>
      <div class="monster-image grid-item grid-item-7">
        <MonsterBestiary :showImage="true" :showInfo="false" />
      </div>
      <div class="monster-info grid-item grid-item-8">
        <MonsterBestiary :showImage="false" />
      </div>
      <div class="grid-item grid-item-9">
        <div class="turn-counter">Turn: {{ turnCount }}</div>
      </div>
      <div class="grid-item grid-item-10">10</div>
      <div class="grid-item grid-item-11">11</div>
      <div class="grid-item grid-item-12">12</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Player from './children/Player.vue'
import MonsterBestiary from './children/MonsterBestiary.vue'
import CombatManager from './CombatManager.vue'
import { useGameStateStore } from '../stores/gameStateStore'
import { useCombatStore } from '../stores/combatStore'
import { storeToRefs } from 'pinia'

const gameStateStore = useGameStateStore()
const combatStore = useCombatStore()
const { turnCount } = storeToRefs(gameStateStore)
const { combatResult } = storeToRefs(combatStore)
</script>

<style scoped>
.gameplay-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gameplay-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 25vh 50vh 25vh;
  height: 100%;
  gap: 10px;
}

.grid-item {
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.version {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 0.69em;
  font-weight: bold;
  text-align: right;
}

.turn-counter {
  margin-top: 10px;
  font-weight: bold;
}
</style>
