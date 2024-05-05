"use client"

import React from 'react'
import NavCaseStudyDesktopCos from '../components/CosmeticCaseStudy/Desktop/NavCaseStudyDesktopCos'
import HeadingDesktopCos from '../components/CosmeticCaseStudy/Desktop/HeadingDesktopCos'
import WireframeDesktopCos from '../components/CosmeticCaseStudy/Desktop/WireframeDesktopCos'
import PatternDesktopCos from '../components/CosmeticCaseStudy/Desktop/PatternDesktopCos'
import PrototypeDesktopCos from '../components/CosmeticCaseStudy/Desktop/PrototypeDesktopCos'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton'

function CosemeticDesktop() {
  return (
    <main>
        <NavCaseStudyDesktopCos />
        <HeadingDesktopCos />
        <WireframeDesktopCos />
        <PatternDesktopCos />
        <PrototypeDesktopCos />
        <Footer />
        <TopButton />
    </main>
  )
}

export default CosemeticDesktop