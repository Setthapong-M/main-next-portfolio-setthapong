"use client"

import React from 'react'
import HeadingMobileCos from '../components/CosmeticCaseStudy/Mobile/HeadingMobileCos'
import NavCaseStudyMobileCos from '../components/CosmeticCaseStudy/Mobile/NavCaseStudyMobileCos'
import WireframeMobileCos from '../components/CosmeticCaseStudy/Mobile/WireframeMobileCos'
import PatternMobileCos from '../components/CosmeticCaseStudy/Mobile/PatternMobileCos'
import PrototypeMobileCos from '../components/CosmeticCaseStudy/Mobile/PrototypeMobileCos'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton'

function CosmeticMobile() {
  return (
    <main>
        <NavCaseStudyMobileCos />
        <HeadingMobileCos />
        <WireframeMobileCos />
        <PatternMobileCos />
        <PrototypeMobileCos />
        <Footer />
        <TopButton />
    </main>
  )
}

export default CosmeticMobile