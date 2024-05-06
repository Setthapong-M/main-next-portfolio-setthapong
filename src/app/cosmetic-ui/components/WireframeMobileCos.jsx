import React from 'react'
import Image from 'next/image'

function WireframeMobileCos() {
  return (
    <div className='flex flex-col bg-grey-bg p-20 gap-y-20'>
        <h1 className='text-white text-4xl text-center'>Wireframe</h1>
        <div id='wireframe-section' className='grid grid-cols-3 gap-12 md:gap-20'>
            <div className='flex justify-end'>
              <Image 
                src='/wm-1-cos.png' 
                alt='Wireframe_mobile_1' 
                className="object-cover min-w-24"
                width={256}
                height={256} />
            </div>
            
            <div className='shrink justify-self-center'>
              <Image 
                src='/wm-2-cos.png' 
                alt='Wireframe_mobile_2' 
                className="object-cover min-w-24"
                width={256}
                height={256} />
            </div>
            
            <div className='shrink justify-start'>
              <Image 
                src='/wm-3-cos.png' 
                alt='Wireframe_mobile_3' 
                className="object-cover min-w-24"
                width={256}
                height={256} />
            </div>
            
        </div>
    </div>
    
  )
}

export default WireframeMobileCos