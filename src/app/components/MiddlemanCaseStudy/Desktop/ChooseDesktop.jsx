import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ChooseDesktop() {
  return (
    <div className='py-20'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-20 px-6 md:flex-row md:justify-evenly md:items-center md:px-20'>
            <div className='flex justify-center md:justify-end md:pr-20 items-center'>
                <Image
                    src='/pd-1.png' 
                    alt='Macbook' 
                    className="max-h-96 w-[500px]"
                    width={1000}
                    height={1000}
                    priority
                ></Image>
            </div>
            <div className='flex justify-center md:justify-start items-center'>
                <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl font-bold text-center md:text-start'>MIDDLEMAN (Desktop)</h1>
                <div className='max-w-lg mx-auto text-justify'>
                    <p>A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud.</p>
                    <ul className='my-6'>
                        <li>Project Type: End-to-end app + branding</li>
                        <li>Role: UX/UI designer + branding designer</li>
                        <li>Reference: Customer experience /User experience/ User interface </li>
                    </ul>
                    <div className='flex justify-center md:justify-start'>
                        <Link href='/middleman-case-study-desktop'><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl mt-6'>View desktop case study</button></Link>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    </div>
    
    
  )
}

export default ChooseDesktop