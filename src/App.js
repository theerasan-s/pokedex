import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import BottomBar from './components/BottomBar/BottomBar'
import AddModal from './components/AddModal/AddModal'
import PokedexCard from './components/PokedexCard/PokedexCard'
import usePokemonListAction from './hooks/usePokemonListAction'

import useModal from './hooks/useModal'

import './App.css'
import 'antd/dist/antd.css'
import {
   BottomContainer,
   ModalContainer,
   PokedexContainer,
   PokedexTitle,
   Container,
} from './styled'

const App = (props) => {
   const { isModalOpen, openModal, closeModal } = useModal()
   const [allPokemonList, setAllPokemonList] = useState([])
   const { onRemovePokemeon } = usePokemonListAction()

   useEffect(() => {
      const fetchData = async () => {
         const fetchPokemonList = await fetch('http://localhost:3030/api/cards')
         const pokemonList = await fetchPokemonList.json()
         await setAllPokemonList(pokemonList.cards)
      }

      fetchData()
   }, [])

   return (
      <>
         <Container isModalOpen={isModalOpen}>
            <PokedexTitle>My Pokedex</PokedexTitle>
            {props.myPokemonList.length > 0 && (
               <PokedexContainer>
                  {props.myPokemonList.map((pokemon) => (
                     <PokedexCard
                        pokemon={pokemon}
                        onDelete={onRemovePokemeon}
                     />
                  ))}
               </PokedexContainer>
            )}
         </Container>
         <BottomContainer>
            <BottomBar onOpenModal={openModal} isModalOpen={isModalOpen} />
         </BottomContainer>
         {isModalOpen && allPokemonList.length > 0 && (
            <ModalContainer>
               <AddModal
                  isOpen={isModalOpen}
                  allPokemon={allPokemonList}
                  myPokemon={props.myPokemonList}
                  onClose={closeModal}
               />
            </ModalContainer>
         )}
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      myPokemonList: state.pokedex || [],
   }
}
export default connect(mapStateToProps)(App)
