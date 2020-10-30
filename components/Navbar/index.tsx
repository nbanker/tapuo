import * as React from 'react'
import { Menu } from 'react-feather'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

type NavBarPropTypes = {
  toggle: () => void
}

const Navbar: React.FC<NavBarPropTypes> = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>tapuo</NavLogo>
          <MobileIcon onClick={toggle}>
            <Menu />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
