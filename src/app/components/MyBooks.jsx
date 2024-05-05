import React from 'react'
import Image from 'next/image'

function MyBooks({slides}) {
  return (
    <div className='overflow-x-scroll'>
        <div className='flex gap-6'>
        {slides.map((s, index) => {
          return <Image 
            src={s}
            width={300}
            height={300}
            alt="/"
            className="object-cover min-w-32 border border-black drop-shadow-md" 
            key={index}
            />;
        })}
        </div>
    </div>
    
  )
}

export default MyBooks