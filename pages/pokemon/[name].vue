<template>
  <div class="container">
    <NuxtLink to="/">← Back</NuxtLink>

    <p v-if="errorMessage" class="error">
      {{ errorMessage }}
    </p>

    <p v-else-if="!pokemon">Loading...</p>

    <div v-else>
      <h1>{{ capitalize(pokemon.name) }}</h1>

      <img
        :src="pokemon.image"
        :alt="pokemon.name"
        class="image"
      />

      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
      <p>
        <strong>Abilities:</strong>
        {{ formattedAbilities }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon = ref<any>(null)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const response = await fetch(`/api/pokemon/${route.params.name}`)
    const data = await response.json()

    if (data.error) {
      errorMessage.value = data.error
    } else {
      pokemon.value = data
    }
  } catch {
    errorMessage.value = 'Failed to load Pokémon details'
  }
})

const formattedAbilities = computed(() => {
  if (!pokemon.value) return ''

  return pokemon.value.abilities
    .map((a: any) =>
      a.ability.name.charAt(0).toUpperCase() +
      a.ability.name.slice(1)
    )
    .join(', ')
})

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.image {
  width: 280px;
  display: block;
  margin: 24px auto;
}

p {
  font-size: 16px;
  margin: 8px 0;
}

strong {
  color: #111827;
}

.error {
  color: #dc2626;
  font-weight: 600;
  margin-top: 16px;
}
</style>
