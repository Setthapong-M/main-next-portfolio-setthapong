import React from 'react'
import Image from 'next/image'

function WireframeDesktop() {
  return (
    <div id='wireframe-section' className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 bg-grey-bg p-20'>
        <h1 className='flex text-white text-4xl justify-center items-center'>Wireframe</h1>
        <Image 
            src='/wd-1.png' 
            alt='Wireframe_desktop_1' 
            className="object-cover mb-20"
            width={1000}
            height={1000} />
        
        <Image 
            src='/wd-2.png' 
            alt='Wireframe_desktop_2' 
            className="object-cover"
            width={1000}
            height={1000} />
        <Image 
            src='/wd-3.png' 
            alt='Wireframe_desktop_3' 
            className="object-cover"
            width={1000}
            height={1000} />
        {/* <Image 
            src='/wm-1.png' 
            alt='Wireframe_mobile_1' 
            className="object-cover"
            width={1000}
            height={1000} />
        <Image 
            src='/wm-2.png' 
            alt='Wireframe_mobile_2' 
            className="object-cover"
            width={1000}
            height={1000} /> */}
    </div>
  )
}

export default WireframeDesktop