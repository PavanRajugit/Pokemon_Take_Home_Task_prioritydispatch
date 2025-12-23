export default defineEventHandler(async (event) => {
  const name = event.context.params?.name

  if (!name) {
    return { error: 'Pokemon name missing' }
  }

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    )

    if (!response.ok) {
      throw new Error('Pokemon not found')
    }

    const data = await response.json()

    return {
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities,
      image: data.sprites.other['official-artwork'].front_default
    }
  } catch (error) {
    return { error: 'Failed to load Pokémon details' }
  }
})
