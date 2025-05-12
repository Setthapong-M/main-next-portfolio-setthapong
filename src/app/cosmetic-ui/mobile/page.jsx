"use client"

import React from 'react'
import WireframeMobileCos from '../components/WireframeMobileCos'
import PatternMobileCos from '../components/PatternMobileCos'
import PrototypeMobileCos from '../components/PrototypeMobileCos'
import Footer from '../../components/Footer'
import TopButton from '../../components/TopButton'
import ChooseViewRight from '@/app/middleman-design/components/ChooseViewRight'
import Navbar from '@/app/components/Navbar'

function CosmeticMobile() {
  return (
    <main>
        <Navbar isHifi={true}/>
        <ChooseViewRight 
          img={'/pm-1-cos.png'}
          title={"Cosmetic (Mobile)"}
          subtitle={"This project is designing a user interface by FutureSkill. That was designed for an e-commerce website."}
          p1={"Project Type: Design user interface + responsive"}
          p2={"Role: UI designer"}
          p3={"Reference: User interface"}
          href={'https://www.figma.com/proto/c00PUu4KUQtGEDvOIBEcTy/User-Interface-Cosmetic?page-id=58%3A2865&type=design&node-id=58-2866&viewport=431%2C340%2C0.42&t=zfaoMjg2IvuDvuRd-1&scaling=scale-down&starting-point-node-id=58%3A2866&mode=design'}
          btn={"View Hi-Fi Prototype"}
          target={"_blank"}
        />
        <WireframeMobileCos />
        <PatternMobileCos />
        <PrototypeMobileCos />
        <Footer />
        <TopButton />
    </main>
  )
}

export default CosmeticMobile