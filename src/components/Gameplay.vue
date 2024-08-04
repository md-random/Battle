<!-- src/components/Gameplay.vue -->
<template>
  <div class="gameplay-container">
    <div class="version">version 1.1</div>
    <div class="gameplay">
      <MonsterBestiary />
      <!-- Other gameplay elements can be added here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import MonsterBestiary from './children/MonsterBestiary.vue'
</script>

<style scoped>
.gameplay-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.version {
  font-size: 0.8em;
  color: #666;
  text-align: right;
  margin-bottom: 10px;
}

.gameplay {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
