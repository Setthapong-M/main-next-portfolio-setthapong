"use client"

import React, { useState } from 'react'
import ContentEmpathize from '../components/ContentEmpathize'
import ContentDefine from '../components/ContentDefine'
import ContentIdeate from '../components/ContentIdeate'
import ContentPrototype from '../components/ContentPrototype'
import WireframeMobile from '../components/WireframeMobile'
import PatternMobile from '../components/PatternMobile'
import PrototypeMobile from '../components/PrototypeMobile'
import ContentOverview from '../components/ContentOverview'
import Footer from '../../components/Footer'
import TopButton from '../../components/TopButton'
import ChooseViewRight from '@/app/middleman-design/components/ChooseViewRight'
import Navbar from '@/app/components/Navbar'
import ContentTesting from '@/app/middleman-design/components/ContentTesting'

function MiddlemanMobile() {

  return (
    <main>
        <Navbar isHifi={true}/>
        <ChooseViewRight 
          img={'/pm-1.png'}
          title={"MIDDLEMAN (Mobile)"}
          subtitle={"A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud."}
          p1={"Project Type: End-to-end app + branding"}
          p2={"Role: UX/UI designer + branding designer"}
          p3={"Reference: Customer experience /User experience/ User interface"}
          href={'https://www.figma.com/proto/MJnzt1FROiH7s3B32PxrRC/MVP-Middleman_Pro-Mark-III?page-id=434%3A2225&type=design&node-id=434-2226&viewport=389%2C325%2C0.14&t=6N7Z8gs0H5aLHiPi-1&scaling=scale-down&starting-point-node-id=434%3A2226&mode=design'}
          btn={"View Hi-Fi Prototype"}
        />
        <ContentOverview />
        <ContentEmpathize />
        <ContentDefine />
        <ContentIdeate />
        <ContentPrototype />
        <ContentTesting />
        <WireframeMobile />
        <PatternMobile />
        <PrototypeMobile />
        <Footer />
        <TopButton />
    </main>
  )
}

export default MiddlemanMobile