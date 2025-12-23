<template>
  <div class="page">
    <header class="hero">
      <div class="hero-content">
        <h1>Pokémon Explorer</h1>
        <p>
          Browse and explore the first 60 Pokémon.
          Use Quick View or open full profiles.
        </p>

        <SearchInput v-model="searchTerm" />
      </div>
    </header>

    <main class="content">
      <div class="grid">
        <PokemonCard
          v-for="pokemon in filteredPokemon"
          :key="pokemon.name"
          :pokemon="pokemon"
          @preview="openPreview"
        />
      </div>
    </main>

    <PokemonPreviewModal
      v-if="selectedPokemon"
      :pokemon="selectedPokemon"
      @close="selectedPokemon = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const pokemonList = ref<any[]>([])
const searchTerm = ref('')
const selectedPokemon = ref<any>(null)

onMounted(async () => {
  const response = await fetch('/api/pokemon')
  pokemonList.value = await response.json()
})

const filteredPokemon = computed(() => {
  return pokemonList.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const openPreview = async (name: string) => {
  selectedPokemon.value = null

  const response = await fetch(`/api/pokemon/${name}`)
  const data = await response.json()

  if (!data.error) {
    selectedPokemon.value = data
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f4f6f8;
}

.hero {
  background: linear-gradient(135deg, #ef5350, #fbc02d);
  color: white;
  padding: 60px 20px 40px;
  text-align: center;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 12px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 32px;
}

.content {
  max-width: 1200px;
  margin: -40px auto 0;
  padding: 40px 24px 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 24px;
}
</style>
