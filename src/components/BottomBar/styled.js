import styled from 'styled-components'

import { PlusOutlined } from '@ant-design/icons'

import { Button } from 'antd'

const BOTTOMBARBACKGROUND = '#ec5656'

export const BottomBarContainer = styled.div`
   /* display: ${(props) => (props.isOpen ? 'none' : 'block')}; */
`

export const BackgroundBar = styled.div`
   background-color: ${BOTTOMBARBACKGROUND};
   position: relative;
   height: 50px;
   width: 100%;
`

export const AddButton = styled(Button)`
   position: absolute;
   top: -20px;
   left: calc(50% - 30px);
   width: 60px;
   height: 60px;
   background-color: ${BOTTOMBARBACKGROUND};
   border: none;

   :focus {
      background-color: ${BOTTOMBARBACKGROUND};
   }
`

export const AddIcon = styled(PlusOutlined)`
   color: white;
   font-size: 30px;
`
