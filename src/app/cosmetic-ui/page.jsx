"use client"

import React from 'react'
import Footer from '../components/Footer'
import ChooseViewRight from '../middleman-design/components/ChooseViewRight'
import ChooseViewLeft from '../middleman-design/components/ChooseViewLeft'
import Navbar from '../components/Navbar'

function CosmeticChoose() {
  return (
    <main>
        <Navbar />
        <ChooseViewRight 
          img={'/pm-1-cos.png'}
          title={"Cosmetic (Mobile)"}
          subtitle={"This project is designing a user interface by FutureSkill. That was designed for an e-commerce website."}
          p1={"Project Type: Design user interface + responsive"}
          p2={"Role: UI designer"}
          p3={"Reference: User interface"}
          href={'/cosmetic-ui/mobile'}
          btn={"View desktop case study"}
        />
        <ChooseViewLeft 
          img={'/pd-1-cos.png'}
          title={"Cosmetic (Desktop)"}
          subtitle={"This project is designing a user interface by FutureSkill. That was designed for an e-commerce website."}
          p1={"Project Type: Design user interface + responsive"}
          p2={"Role: UI designer"}
          p3={"Reference: User interface"}
          href={'/cosmetic-ui/desktop'}
          btn={"View desktop case study"}
        />
        <Footer />
    </main>
  )
}

export default CosmeticChoose