"use client"

import React, { useState } from 'react'
import ContentEmpathize from '../../components/MiddlemanCaseStudy/Global/ContentEmpathize'
import ContentDefine from '../../components/MiddlemanCaseStudy/Global/ContentDefine'
import ContentIdeate from '../../components/MiddlemanCaseStudy/Global/ContentIdeate'
import ContentPrototype from '../../components/MiddlemanCaseStudy/Global/ContentPrototype'
import WireframeMobile from '../../components/MiddlemanCaseStudy/Mobile/WireframeMobile'
import PatternMobile from '../../components/MiddlemanCaseStudy/Mobile/PatternMobile'
import PrototypeMobile from '../../components/MiddlemanCaseStudy/Mobile/PrototypeMobile'
import ContentOverview from '../../components/MiddlemanCaseStudy/Global/ContentOverview'
import Footer from '../../components/Footer'
import TopButton from '../../components/TopButton'
import ChooseViewRight from '@/app/components/MiddlemanCaseStudy/Global/ChooseViewRight'
import Navbar from '@/app/components/Navbar'

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
        <WireframeMobile />
        <PatternMobile />
        <PrototypeMobile />
        <Footer />
        <TopButton />
    </main>
  )
}

export default MiddlemanMobile