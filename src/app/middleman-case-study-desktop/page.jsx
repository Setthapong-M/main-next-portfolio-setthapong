"use client"

import React from 'react'
import NavCaseStudy from '../components/MiddlemanCaseStudy/Mobile/NavCaseStudyMobile'
import HeadingDesktop from '../components/MiddlemanCaseStudy/Desktop/HeadingDesktop'
import ContentEmpathize from '../components/MiddlemanCaseStudy/Global/ContentEmpathize'
import ContentDefine from '../components/MiddlemanCaseStudy/Global/ContentDefine'
import ContentIdeate from '../components/MiddlemanCaseStudy/Global/ContentIdeate'
import ContentPrototype from '../components/MiddlemanCaseStudy/Global/ContentPrototype'
import WireframeDesktop from '../components/MiddlemanCaseStudy/Desktop/WireframeDesktop'
import PatternDesktop from '../components/MiddlemanCaseStudy/Desktop/PatternDesktop'
import PrototypeDesktop from '../components/MiddlemanCaseStudy/Desktop/PrototypeDesktop'
import ContentOverview from '../components/MiddlemanCaseStudy/Global/ContentOverview'
import NavCaseStudyDesktop from '../components/MiddlemanCaseStudy/Desktop/NavCaseStudyDesktop'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton'

function MiddlemanDesktop() {
  return (
    <main>
        <NavCaseStudyDesktop />
        <HeadingDesktop />
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