export const addPokemon = (addedPokemon) => ({
   type: 'ADDPOKEMON',
   pokemon: addedPokemon,
})

export const removePokemon = (removedPokemon) => ({
   type: 'REMOVEPOKEMON',
   pokemon: removedPokemon,
})
