import React from 'react'

import search from '../../search.png'
import PokemonCard from '../PokemonCards/PokemonCard'

import usePokemonListAction from '../../hooks/usePokemonListAction'

import {
   ModalBackground,
   ModalContent,
   SearchImageIcon,
   PokemonCardContainer,
   SearchInput,
   Container,
} from './styled'

const AddModal = (props) => {
   const { searchResult, findPokemon, addPokemonList } = usePokemonListAction(
      props.allPokemon,
      props.myPokemon
   )

   return (
      <>
         <Container onClick={props.onClose} />
         <ModalBackground>
            <ModalContent>
               <SearchInput
                  placeholder={'find Pokemon'}
                  suffix={<SearchImageIcon src={search} alt="search" />}
                  onChange={(e) => findPokemon(e.target.value)}
               />

               {searchResult.length > 0
                  ? searchResult.map((pokemon) => (
                       <PokemonCardContainer>
                          <PokemonCard
                             pokemon={pokemon}
                             onAdd={addPokemonList}
                          />
                       </PokemonCardContainer>
                    ))
                  : null}
            </ModalContent>
         </ModalBackground>
      </>
   )
}

export default AddModal
