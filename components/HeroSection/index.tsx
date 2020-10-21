import React from 'react'

import { Button } from '../Button/ButtonElement'
import {
  HeroContainer,
  HeroBg,
  BgImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper
} from './HersoSectionElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <BgImage></BgImage>
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to tapuo!</HeroH1>
        <HeroP>How can we help?</HeroP>
        <HeroBtnWrapper>
          <Button primary="true" dark="true">
            Get In Touch
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
