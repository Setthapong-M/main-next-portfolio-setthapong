"use client"

import React from 'react'
import Footer from '../components/Footer'
import ChooseDesktop from '../components/MiddlemanCaseStudy/Desktop/ChooseDesktop'
import ChooseMobile from '../components/MiddlemanCaseStudy/Mobile/ChooseMobile'
import NavbarChoose from '../components/MiddlemanCaseStudy/Global/NavbarChoose'


function MiddlemanChoose() {
  return (
    <main>
        <NavbarChoose />
        <ChooseMobile />
        <ChooseDesktop />
        <Footer />
    </main>
  )
}

export default MiddlemanChoose