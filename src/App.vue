<template>
  <div id="app">
    <header>
      <h1>Battle Game</h1>
    </header>
    <main>
      <Gameplay />
    </main>
    <footer>
      <p>&copy; 2024 Battle Game. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Gameplay from './components/Gameplay.vue'
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5em;
  color: #4a4a4a;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

footer {
  margin-top: 40px;
  font-size: 0.9em;
  color: #666;
}
</style>
