import React from 'react'

import {
   Container,
   CardImage,
   PokemonName,
   PokemonInformationContainer,
   PokemonInformation,
   StrengthGauge,
   StatusText,
   HealthGauge,
   WeaknessGauge,
   HappinessImage,
   AddButton,
} from './styled'

import cute from '../../cute.png'

const PokemonCard = (props) => {
   const strength = props.pokemon.attacks
      ? parseInt(props.pokemon.attacks.length)
      : 0
   const weakness = props.pokemon.weaknesses
      ? parseInt(props.pokemon.weaknesses.length)
      : 0

   console.log('weak>>>', props.pokemon.weaknesses)
   const hp = parseInt(props.pokemon.hp)
   let damage = 0
   const happinessArray = []

   if (props.pokemon.attacks) {
      props.pokemon.attacks.forEach((attack) => {
         const numberList = attack.damage.match(/\d/g)

         if (numberList !== null) {
            const damageNumber = numberList.join('')
            damage += parseInt(damageNumber)
         }
      })
   }

   const calculatedHappiness = (hp / 10 + damage / 10 + 10 - weakness) / 5
   const happiness = calculatedHappiness > 0 ? calculatedHappiness : 0

   for (let i = 0; i < happiness; i++) {
      happinessArray.push(
         <HappinessImage src={cute} alt="happiness level" key={i} />
      )
   }

   return (
      <Container>
         <CardImage
            alt={`${props.pokemon.name}`}
            src={props.pokemon.imageUrl}
         />
         <PokemonInformationContainer>
            <PokemonName>{props.pokemon.name}</PokemonName>
            <PokemonInformation>
               <StatusText>HP</StatusText>
               <HealthGauge health={hp} />
               <StatusText>STR</StatusText>
               <StrengthGauge level={strength} />
               <StatusText>WEAK</StatusText>
               <WeaknessGauge weak={weakness} />
            </PokemonInformation>
            {happinessArray.length > 0 && happinessArray}
         </PokemonInformationContainer>
         <AddButton onClick={() => props.onAdd(props.pokemon)}>Add</AddButton>
      </Container>
   )
}

export default PokemonCard
