import styled from 'styled-components'

export const BottomContainer = styled.div`
   position: absolute;
   width: 100%;
   bottom: 0;
`

export const ModalContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   z-index: 1;
`

export const PokedexContainer = styled.div`
   display: grid;
   position: absolute;
   z-index: ${(props) => (props.isModalOpen ? -1 : 0)};
   grid-template-columns: 50% 50%;
   grid-gap: 20px 8px;
   width: 100%;
`

export const PokedexTitle = styled.div`
   width: 100%;
   font-family: 'Atma', cursive;
   text-align: center;
   font-size: 30px;
`

export const Container = styled.div`
   height: calc(100% - 50px);
   position: relative;
   overflow: ${(props) => (props.isModalOpen ? 'hidden' : 'auto')};
   margin: 0 12px;
`
