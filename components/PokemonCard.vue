<template>
  <div class="card">
    <!-- Clickable link -->
    <NuxtLink :to="`/pokemon/${pokemon.name}`" class="link">
      <img :src="pokemon.image" :alt="pokemon.name" />
      <p>{{ displayName }}</p>
    </NuxtLink>

    <!-- Quick View -->
    <button class="preview" @click="$emit('preview', pokemon.name)">
      Quick View
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineEmits(['preview'])

const props = defineProps<{
  pokemon: {
    name: string
    image: string
  }
}>()

const displayName = computed(() => {
  return (
    props.pokemon.name.charAt(0).toUpperCase() +
    props.pokemon.name.slice(1)
  )
})
</script>

<style scoped>
.card {
  text-align: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.link img {
  width: 96px;
  height: 96px;
  margin-bottom: 12px;
}

.link p {
  margin: 0;
  font-weight: 600;
}

/* 🔹 MUTED QUICK VIEW (≈50% brightness) */
.preview {
  margin-top: 10px;
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fab121; /* muted slate blue */
  color: white;
  transition: background-color 0.2s ease;
}

.preview:hover {
  background-color: #f76363;
}
</style>
