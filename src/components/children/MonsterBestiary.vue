<!-- src/components/children/MonsterBestiary.vue -->
<template>
  <div class="monster-bestiary">
    <h2 v-if="randomMonster">
      {{ randomMonster.attackStyle }} {{ randomMonster.type }} Monster
    </h2>
    <h2 v-else>Loading Monster...</h2>
    <div v-if="randomMonster">
      <h3>{{ randomMonster.name }}</h3>
      <p class="image-size">
        <img
          v-if="randomMonsterImage"
          :src="randomMonsterImage"
          :alt="randomMonster.name"
          @error="handleImageError"
        />
        <span v-else>Image not available</span>
      </p>
      <p>Type: {{ randomMonster.type }}</p>
      <p>Attack Style: {{ randomMonster.attackStyle }}</p>
      <p>Life: {{ randomMonster.life }}</p>
      <p>Attack Power: {{ randomMonster.attackPower }}</p>
      <p>Defense Rating: {{ randomMonster.defenseRating }}</p>
      <p>Awareness: {{ randomMonster.awareness }}</p>
      <p>Primary Attack: {{ randomMonster.primaryAttack }}</p>
      <p>Secondary Attack: {{ randomMonster.secondaryAttack }}</p>
      <p>Special Attack: {{ randomMonster.specialAttack }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Monster } from '../interface/Bestiary'
import { monsters } from '../interface/Bestiary'

const randomMonster = ref<Monster | null>(null)
const randomMonsterImage = ref<string | undefined>(undefined)

const selectRandomMonster = () => {
  if (monsters.length > 0) {
    const randomIndex = Math.floor(Math.random() * monsters.length)
    randomMonster.value = monsters[randomIndex]
    if (randomMonster.value) {
      loadMonsterImage(randomMonster.value.image)
    }
  } else {
    console.error('No monsters available in the bestiary.')
  }
}

const loadMonsterImage = (imagePath: string) => {
  console.log(`Attempting to load image: ${imagePath}`)
  try {
    const imageUrl = new URL(
      `/src/assets/bestiary-images/${imagePath}`,
      import.meta.url
    ).href
    console.log(`Resolved image URL: ${imageUrl}`)
    randomMonsterImage.value = imageUrl
  } catch (error) {
    console.error('Error loading image:', error)
    randomMonsterImage.value = undefined
  }
}

const handleImageError = (event: Event) => {
  console.error('Image failed to load:', (event.target as HTMLImageElement).src)
  randomMonsterImage.value = undefined
}

onMounted(() => {
  selectRandomMonster()
})
</script>

<style scoped>
.monster-bestiary {
  /* Add your styles here */
}

.image-size img {
  max-width: 200px !important;
  max-height: 200px;
  object-fit: contain;
}
</style>
