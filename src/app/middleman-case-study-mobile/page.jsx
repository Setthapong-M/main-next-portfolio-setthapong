"use client"

import React from 'react'
import NavCaseStudy from '../components/MiddlemanCaseStudy/Mobile/NavCaseStudyMobile'
import ContentEmpathize from '../components/MiddlemanCaseStudy/Global/ContentEmpathize'
import ContentDefine from '../components/MiddlemanCaseStudy/Global/ContentDefine'
import ContentIdeate from '../components/MiddlemanCaseStudy/Global/ContentIdeate'
import ContentPrototype from '../components/MiddlemanCaseStudy/Global/ContentPrototype'
import WireframeMobile from '../components/MiddlemanCaseStudy/Mobile/WireframeMobile'
import PatternMobile from '../components/MiddlemanCaseStudy/Mobile/PatternMobile'
import PrototypeMobile from '../components/MiddlemanCaseStudy/Mobile/PrototypeMobile'
import ContentOverview from '../components/MiddlemanCaseStudy/Global/ContentOverview'
import HeadingMobile from '../components/MiddlemanCaseStudy/Mobile/HeadingMobile'
import NavCaseStudyMobile from '../components/MiddlemanCaseStudy/Mobile/NavCaseStudyMobile'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton'

function MiddlemanMobile() {
  return (
    <main>
        <NavCaseStudyMobile />
        <HeadingMobile />
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