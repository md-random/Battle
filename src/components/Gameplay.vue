<template>
  <div class="gameplay-container">
    <div class="gameplay-grid">
      <div class="grid-item grid-item-1">1</div>
      <div class="grid-item grid-item-2">2</div>
      <div class="grid-item grid-item-3">3</div>
      <div class="grid-item grid-item-4">
        <div class="version">Version 1.2</div>
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
      <div class="grid-item grid-item-9">9</div>
      <div class="grid-item grid-item-10">10</div>
      <div class="grid-item grid-item-11">11</div>
      <div class="grid-item grid-item-12">12</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Player from './children/Player.vue'
import MonsterBestiary from './children/MonsterBestiary.vue'
</script>

<style scoped>
.gameplay-container {
  width: 100vw;
  height: 100vh; /* Full height of the viewport */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gameplay-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: 25vh 50vh 25vh; /* Top and bottom rows take 25%, middle row takes 50% */
  height: 100%; /* Full height of the container */
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
</style>
