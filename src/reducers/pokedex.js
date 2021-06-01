const actionType = {
   add: 'ADDPOKEMON',
   remove: 'REMOVEPOKEMON',
}

export const pokedex = (state = [], action) => {
   console.log('actionType>>>', action.type)
   if (action.pokemon && action.type === actionType.add) {
      console.log('why')
      return [...state, action.pokemon]
   }

   if (action.pokemon && action.type === actionType.remove) {
      const newPokedex = state.filter(
         (pokemon) => pokemon.name !== action.pokemon.name
      )

      console.log('dooo')
      return newPokedex
   }

   return state
}
