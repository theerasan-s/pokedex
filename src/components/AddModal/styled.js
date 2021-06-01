import styled from 'styled-components'

import { Input } from 'antd'

const MODALSHADOW = '#474444'

export const ModalBackground = styled.div`
   width: 90%;
   max-height: 700px;
   left: 0;
   top: 0;
   overflow: auto;
   margin: auto;
`

export const ModalContent = styled.div`
   position: relative;
   background-color: white;
   margin: auto;
   width: 100%;
   height: 100%;
   overflow: auto;
   padding: 12px;
   font-family: 'Gaegu', cursive;
`

export const SearchImageIcon = styled.img`
   max-width: 20px;
   cursor: pointer;
`

export const PokemonCardContainer = styled.div`
   margin: 12px 0;
`

export const SearchInput = styled(Input)`
   height: 48px;
`

export const Container = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   background-color: ${MODALSHADOW};
   opacity: 0.8;
`

export const Placeholder = styled.span`
   font-size: 30px;
`
