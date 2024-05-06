import React from 'react'
import Image from 'next/image'

function WireframeMobile() {
  return (
    <div className='flex flex-col bg-grey-bg p-20 gap-y-20'>
        <h1 className='text-white text-4xl text-center'>Wireframe</h1>
        <div id='wireframe-section' className='flex flex-col md:grid md:grid-cols-2 gap-20 '>
            <Image 
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
                height={1000} />
        </div>
    </div>
    
  )
}

export default WireframeMobile