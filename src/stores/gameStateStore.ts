// src/stores/gameStateStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStateStore = defineStore('gameState', () => {
  const turnCount = ref(0)

  function incrementTurn() {
    turnCount.value++
  }

  return {
    turnCount,
    incrementTurn,
  }
})
