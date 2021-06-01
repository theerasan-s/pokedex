import React from 'react'

import { BackgroundBar, BottomBarContainer, AddButton, AddIcon } from './styled'

const BottomBar = (props) => {
   return (
      <BottomBarContainer isOpen={props.isModalOpen}>
         <BackgroundBar>
            <AddButton
               icon={<AddIcon />}
               shape="circle"
               onClick={props.onOpenModal}
            />
         </BackgroundBar>
      </BottomBarContainer>
   )
}

export default BottomBar
