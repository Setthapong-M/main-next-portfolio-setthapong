"use client"

import React from 'react'
import Footer from '../components/Footer'
import ChooseViewLeft from './components/ChooseViewLeft'
import ChooseViewRight from './components/ChooseViewRight'
import Navbar from '../components/Navbar'


function MiddlemanChoose() {
  return (
    <main>
        <Navbar />
        <ChooseViewRight 
          img={'/pm-1.png'}
          title={"MIDDLEMAN (Mobile)"}
          subtitle={"A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud."}
          p1={"Project Type: End-to-end app + branding"}
          p2={"Role: UX/UI designer + branding designer"}
          p3={"Reference: Customer experience /User experience/ User interface"}
          href={'/middleman-design/mobile'}
          btn={"View Mobile Case Study"}
        />
        <ChooseViewLeft 
          img={'/pd-1.png'}
          title={"MIDDLEMAN (Desktop)"}
          subtitle={"A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud."}
          p1={"Project Type: End-to-end app + branding"}
          p2={"Role: UX/UI designer + branding designer"}
          p3={"Reference: Customer experience /User experience/ User interface"}
          href={'/middleman-design/desktop'}
          btn={"View Desktop Case Study"}
        />
        <Footer />
    </main>
  )
}

export default MiddlemanChoose