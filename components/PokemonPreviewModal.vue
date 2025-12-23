<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <button class="close" @click="$emit('close')">✕</button>

      <h2>{{ capitalize(pokemon.name) }}</h2>

      <img :src="pokemon.image" :alt="pokemon.name" />

      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>

      <p>
        <strong>Abilities:</strong>
        {{ formattedAbilities }}
      </p>

      <NuxtLink
        :to="`/pokemon/${pokemon.name}`"
        class="profile-link"
      >
        View Full Profile →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  pokemon: any
}>()

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)

const formattedAbilities = computed(() => {
  if (!props.pokemon?.abilities) return 'Loading...'

  return props.pokemon.abilities
    .map((a: any) =>
      a.ability.name.charAt(0).toUpperCase() +
      a.ability.name.slice(1)
    )
    .join(', ')
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 24px;
  width: 90%;
  max-width: 420px;
  border-radius: 12px;
  text-align: center;
  position: relative;
}

.modal h2 {
  color: #3b82f6;
}

.modal img {
  width: 200px;
  margin: 16px 0;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

/* FRIENDLY BLUE LINK */
.profile-link {
  display: inline-block;
  margin-top: 16px;
  font-weight: 600;
  color: #3b82f6;
}

.profile-link:hover {
  text-decoration: underline;
}
</style>
