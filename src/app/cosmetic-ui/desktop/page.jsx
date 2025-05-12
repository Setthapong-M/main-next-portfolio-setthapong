"use client"

import React from 'react'
import WireframeDesktopCos from '../components/WireframeDesktopCos'
import PatternDesktopCos from '../components/PatternDesktopCos'
import PrototypeDesktopCos from '../components/PrototypeDesktopCos'
import Footer from '../../components/Footer'
import TopButton from '../../components/TopButton'
import ChooseViewLeft from '@/app/middleman-design/components/ChooseViewLeft'
import Navbar from '@/app/components/Navbar'

function CosemeticDesktop() {
  return (
    <main>
        <Navbar isHifi={true}/>
        <ChooseViewLeft 
          img={'/pd-1-cos.png'}
          title={"Cosmetic (Desktop)"}
          subtitle={"This project is designing a user interface by FutureSkill. That was designed for an e-commerce website."}
          p1={"Project Type: Design user interface + responsive"}
          p2={"Role: UI designer"}
          p3={"Reference: User interface"}
          href={'https://www.figma.com/proto/c00PUu4KUQtGEDvOIBEcTy/User-Interface-Cosmetic?page-id=302%3A513&type=design&node-id=303-716&viewport=-212%2C176%2C0.29&t=f91galcvS6SHFDCP-1&scaling=scale-down&starting-point-node-id=303%3A716&mode=design'}
          btn={"View Hi-Fi Prototype"}
          target={"_blank"}
        />
        <WireframeDesktopCos />
        <PatternDesktopCos />
        <PrototypeDesktopCos />
        <Footer />
        <TopButton />
    </main>
  )
}

export default CosemeticDesktop