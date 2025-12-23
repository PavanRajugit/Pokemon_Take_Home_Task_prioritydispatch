export default defineEventHandler(async () => {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=60'
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list')
    }

    const data = await response.json()

    return data.results.map((pokemon: any, index: number) => ({
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }))
  } catch (error) {
    return { error: 'Unable to load Pokémon list' }
  }
})
