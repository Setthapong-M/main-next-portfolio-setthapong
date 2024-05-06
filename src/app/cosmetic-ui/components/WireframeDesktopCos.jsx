import React from 'react'
import Image from 'next/image'

function WireframeDesktopCos() {
  return (
    <div id='wireframe-section' className='flex flex-col bg-grey-bg px-6 py-20 md:p-20'>
        <h1 className='flex text-white text-4xl justify-center items-center mb-20'>Wireframe</h1>
        <div  className='flex flex-col md:grid md:grid-cols-3 gap-4 '>
            <Image 
                src='/wd-1-cos.png' 
                alt='Wireframe_desktop_1' 
                className="object-cover md:mb-20"
                width={1000}
                height={1000} />
            
            <Image 
                src='/wd-2-cos.png' 
                alt='Wireframe_desktop_2' 
                className="object-cover"
                width={1000}
                height={1000} />
            <Image 
                src='/wd-3-cos.png' 
                alt='Wireframe_desktop_3' 
                className="object-cover"
                width={1000}
                height={1000} />
        </div>
    </div>
    
  )
}

export default WireframeDesktopCos