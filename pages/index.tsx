import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import MobileMenu from '../components/MobileMenu'
import HeroSection from '../components/HeroSection'

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div>Hello</div>
      <HeroSection />
    </>
  )
}

export default HomePage
