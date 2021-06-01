import styled from 'styled-components'

const CARDBACKGROUND = '#f3f4f7'
const CARDBOXSHADOW = '#d5d6dc'
const CARDBOXSHADOWHOVER = '#aeaeae'
const LEVELTUBEBACKGROUND = '#e4e4e4'
const LEVELTUBEVALUEBACKGROUND = '#f3701a'
const ADDBUTTONCOLOR = '#dc7777'

export const AddButton = styled.button`
   display: none;
   position: absolute;
   top: 24px;
   right: 0;
   border: none;
   background-color: transparent;
   font-size: 24px;
   cursor: pointer;

   font-family: 'Atma', cursive;
   color: ${ADDBUTTONCOLOR};
`

export const Container = styled.div`
   width: 100%;
   background-color: ${CARDBACKGROUND};
   box-shadow: 2px 5px 10px ${CARDBOXSHADOW};
   position: relative;
   padding: 12px;

   :hover {
      box-shadow: 2px 5px 10px ${CARDBOXSHADOWHOVER};
   }

   &:hover ${AddButton} {
      display: block;
   }
`

export const CardImage = styled.img`
   max-width: 180px;
`

export const PokemonInformationContainer = styled.div`
   margin-left: 14px;
   position: absolute;
   top: 32px;
   display: inline-block;
   max-width: 500px;
   width: 100%;
`

export const PokemonName = styled.span`
   font-size: 36px;
   font-family: 'Gaegu', cursive;
`

export const PokemonInformation = styled.div`
   margin-bottom: 12px;
   display: grid;
   grid-template-columns: 10% auto;
   grid-row-gap: 8px;
   font-family: 'Atma', cursive;
`

export const StrengthGauge = styled.div`
   background-color: ${LEVELTUBEBACKGROUND};
   max-width: 400px;
   height: 30px;
   border-radius: 20px;
   position: relative;

   ::before {
      position: absolute;
      content: '';
      border-radius: 20px;
      height: 30px;
      background-color: ${LEVELTUBEVALUEBACKGROUND};
      max-width: 400px;
      top: 0px;
      left: 0px;
      width: ${(props) => (props.level ? `${props.level * 50 * 4}px` : 0)};
   }
`

export const HealthGauge = styled.div`
   background-color: ${LEVELTUBEBACKGROUND};
   max-width: 400px;
   height: 30px;
   border-radius: 20px;
   position: relative;

   ::before {
      position: absolute;
      content: '';
      border-radius: 20px;
      height: 30px;
      background-color: ${LEVELTUBEVALUEBACKGROUND};
      max-width: 400px;
      top: 0px;
      left: 0px;
      width: ${(props) =>
         props.health
            ? props.health < 100
               ? `${props.health * 4}px`
               : '400px'
            : 0};
   }
`

export const WeaknessGauge = styled.div`
   background-color: ${LEVELTUBEBACKGROUND};
   max-width: 400px;
   height: 30px;
   border-radius: 20px;
   position: relative;

   ::before {
      position: absolute;
      content: '';
      border-radius: 20px;
      height: 30px;
      background-color: ${LEVELTUBEVALUEBACKGROUND};
      max-width: 400px;
      top: 0px;
      left: 0px;
      width: ${(props) => (props.weak ? `${props.weak * 100 * 4}px` : 0)};
   }
`

export const StatusText = styled.span`
   font-size: 14px;
   line-height: 30px;
   margin-right: 8px;
   width: 40px;
`

export const StatusContainer = styled.div`
   display: flex;
   margin-bottom: 8px;
`

export const HappinessImage = styled.img`
   max-width: 40px;
`
