import React from 'react'
import { XCircle } from 'react-feather'

import {
  MobileMenuContainer,
  CloseIcon,
  MobileMenuWrapper,
  MobileMenuItem,
  MobileLink,
  MobileBtnWrapper,
  MobileBtn
} from './MobileMenuElements'

type MobileMenuProps = {
  isOpen: boolean
  toggle: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle}>
        <XCircle />
      </CloseIcon>
      <MobileMenuWrapper>
        <MobileMenuItem>
          <MobileLink>About</MobileLink>
        </MobileMenuItem>
        <MobileBtnWrapper>
          <MobileBtn>Contact</MobileBtn>
        </MobileBtnWrapper>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  )
}

export default MobileMenu
