import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { addPokemon, removePokemon } from '../actions/action'

export default function usePokemonListAction(
   allPokemonList = [],
   pokemonList = []
) {
   const myPokemonList = pokemonList
   const [searchResult, setSearchResult] = useState(allPokemonList)
   const dispatch = useDispatch()

   const findPokemon = (keyword) => {
      const newSearchResult = allPokemonList.filter((pokemon) => {
         return pokemon.name.toLowerCase().includes(keyword)
      })
      setSearchResult(newSearchResult)
   }

   const addPokemonList = (addedPokemon) => {
      const isAdded = myPokemonList.filter(
         (pokemon) => pokemon.name === addedPokemon.name
      )

      if (isAdded.length === 0) {
         const newPokemonlist = [...myPokemonList, addedPokemon]
         localStorage.setItem('pokedex', JSON.stringify(newPokemonlist))
         const newSearchResult = searchResult.filter(
            (pokemon) => pokemon.name !== addedPokemon.name
         )

         setSearchResult(newSearchResult)
         return dispatch(addPokemon(addedPokemon))
      }

      const newSearchResult = searchResult.filter(
         (pokemon) => pokemon.name !== addedPokemon.name
      )
      setSearchResult(newSearchResult)
   }

   const onRemovePokemeon = (removedPokemon) => {
      return dispatch(removePokemon(removedPokemon))
   }

   return { searchResult, findPokemon, addPokemonList, onRemovePokemeon }
}
