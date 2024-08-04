<template>
  <div class="monster-bestiary">
    <img
      v-if="showImage"
      :src="monsterImage"
      :alt="randomMonster?.name"
      @error="handleImageError"
    />
    <div v-if="showInfo">
      <h2 v-if="randomMonster">
        {{ randomMonster.attackStyle }} {{ randomMonster.type }} Monster
      </h2>
      <h2 v-else>Loading Monster...</h2>
      <div v-if="randomMonster">
        <h3>{{ randomMonster.name }}</h3>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Monster } from '../interface/Bestiary'
import { monsters } from '../interface/Bestiary'

const props = defineProps({
  showImage: {
    type: Boolean,
    default: true,
  },
  showInfo: {
    type: Boolean,
    default: true,
  },
})

const randomMonster = ref<Monster | null>(null)
const monsterImage = ref<string | undefined>(undefined)

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
  try {
    const imageUrl = new URL(
      `../../assets/bestiary-images/${imagePath}`,
      import.meta.url
    ).href
    monsterImage.value = imageUrl
  } catch (error) {
    console.error('Error loading monster image:', error)
    monsterImage.value = undefined
  }
}

const handleImageError = () => {
  console.error('Monster image failed to load')
  monsterImage.value = undefined
}

onMounted(() => {
  selectRandomMonster()
})
</script>

<style scoped>
.monster-bestiary {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 10px ridge darkblue;
}
</style>
