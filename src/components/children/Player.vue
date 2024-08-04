<template>
  <div class="player">
    <img
      v-if="showImage"
      :src="playerImage"
      :alt="player.name"
      @error="handleImageError"
    />
    <div v-if="showInfo">
      <h2>{{ player.name }}</h2>
      <p>Type: {{ player.type }}</p>
      <p>Attack Style: {{ player.attackStyle }}</p>
      <p>Life: {{ player.life }}</p>
      <p>Attack Power: {{ player.attackPower }}</p>
      <p>Defense Rating: {{ player.defenseRating }}</p>
      <p>Awareness: {{ player.awareness }}</p>
      <p>Primary Attack: {{ player.primaryAttack }}</p>
      <p>Secondary Attack: {{ player.secondaryAttack }}</p>
      <p>Special Attack: {{ player.specialAttack }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Player } from '../interface/Player'

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

const player = ref<Player>({
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
})

const playerImage = ref<string | undefined>(undefined)

const loadPlayerImage = () => {
  try {
    const imageUrl = new URL(
      `../../assets/player-images/${player.value.image}`,
      import.meta.url
    ).href
    playerImage.value = imageUrl
  } catch (error) {
    console.error('Error loading player image:', error)
    playerImage.value = undefined
  }
}

const handleImageError = () => {
  console.error('Player image failed to load')
  playerImage.value = undefined
}

onMounted(() => {
  loadPlayerImage()
})
</script>

<style scoped>
.player {
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
  border: 10px ridge gold;
}
</style>
