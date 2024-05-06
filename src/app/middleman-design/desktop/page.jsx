"use client"

import React from 'react'
import ContentEmpathize from '../../components/MiddlemanCaseStudy/Global/ContentEmpathize'
import ContentDefine from '../../components/MiddlemanCaseStudy/Global/ContentDefine'
import ContentIdeate from '../../components/MiddlemanCaseStudy/Global/ContentIdeate'
import ContentPrototype from '../../components/MiddlemanCaseStudy/Global/ContentPrototype'
import WireframeDesktop from '../../components/MiddlemanCaseStudy/Desktop/WireframeDesktop'
import PatternDesktop from '../../components/MiddlemanCaseStudy/Desktop/PatternDesktop'
import PrototypeDesktop from '../../components/MiddlemanCaseStudy/Desktop/PrototypeDesktop'
import ContentOverview from '../../components/MiddlemanCaseStudy/Global/ContentOverview'
import Footer from '../../components/Footer'
import TopButton from '../../components/TopButton'
import ChooseViewLeft from '@/app/components/MiddlemanCaseStudy/Global/ChooseViewLeft'
import Navbar from '@/app/components/Navbar'

function MiddlemanDesktop() {
  return (
    <main>
        <Navbar isHifi={true}/>
        <ChooseViewLeft 
          img={'/pd-1.png'}
          title={"MIDDLEMAN (Desktop)"}
          subtitle={"A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud."}
          p1={"Project Type: End-to-end app + branding"}
          p2={"Role: UX/UI designer + branding designer"}
          p3={"Reference: Customer experience /User experience/ User interface"}
          href={'https://www.figma.com/proto/MJnzt1FROiH7s3B32PxrRC/MVP-Middleman_Pro-Mark-III?page-id=389%3A3614&type=design&node-id=403-762&viewport=52%2C388%2C0.06&t=VpoRWeJzFGslTXZg-1&scaling=scale-down&starting-point-node-id=403%3A762&mode=design'}
          btn={"View Hi-Fi Prototype"}
        />
        <ContentOverview/>
        <ContentEmpathize />
        <ContentDefine />
        <ContentIdeate />
        <ContentPrototype />
        <WireframeDesktop />
        <PatternDesktop />
        <PrototypeDesktop />
        <Footer />
        <TopButton />
    </main>
  )
}

export default MiddlemanDesktop