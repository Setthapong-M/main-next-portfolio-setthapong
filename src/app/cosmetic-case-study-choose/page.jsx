"use client"

import React from 'react'
import ChooseDesktopCos from '../components/CosmeticCaseStudy/Desktop/ChooseDesktopCos'
import ChooseMobileCos from '../components/CosmeticCaseStudy/Mobile/ChooseMobileCos'
import Footer from '../components/Footer'
import NavbarChooseCos from '../components/CosmeticCaseStudy/Global/NavbarChooseCos'
import TopButton from '../components/TopButton'

function CosmeticChoose() {
  return (
    <main>
        <NavbarChooseCos />
        <ChooseMobileCos />
        <ChooseDesktopCos />
        <Footer />
    </main>
  )
}

export default CosmeticChoose