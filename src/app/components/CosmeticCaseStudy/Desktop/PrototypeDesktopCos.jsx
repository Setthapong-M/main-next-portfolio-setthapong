import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PrototypeDesktopCos() {
    let pd = "https://www.figma.com/proto/c00PUu4KUQtGEDvOIBEcTy/User-Interface-Cosmetic?page-id=302%3A513&type=design&node-id=303-716&viewport=-212%2C176%2C0.29&t=f91galcvS6SHFDCP-1&scaling=scale-down&starting-point-node-id=303%3A716&mode=design"

  return (
    <div id='prototype-section' className='bg-grey-bg text-white p-20 flex flex-col gap-y-20'>
        <h1 className='text-4xl text-center'>Prototype</h1>

        <div className='flex flex-col-reverse items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end md:pr-20'>
                <div className='flex flex-col justify-around'>
                    <p className='max-w-xl text-center md:text-start'>Intro screen and onboarding</p>
                    {/* <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-12'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button> */}
                </div>
            </div>
            <div className='flex items-end'>
                <Image 
                src='/pd-1-cos.png' 
                alt='Prototype_desktop_1' 
                className=""
                width={500}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pd-2-cos.png' 
                alt='Prototype_desktop_2' 
                className=""
                width={500}
                height={1000} />
            </div>
            <div className='flex justify-start'>
               <div className='flex flex-col justify-around items-center'>
                    <p className='max-w-md text-center md:text-start'>Users land on the product page and look for detail</p>
                    {/* <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-12'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button> */}
                </div> 
            </div>
            
        </div>

        <div className='flex flex-col-reverse items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <div className='flex flex-col'>
                    <p className='max-w-md text-center md:text-start'>After choosing the product, users checkout</p>
                    <div className='flex justify-center md:justify-start'>
                        <Link href={pd}><button className='bg-white hover:bg-grey-hold hover:text-white text-black w-64 h-16 rounded-full text-xl mt-12'>View hi-fi prototype</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <Image 
                src='/pd-3-cos.png' 
                alt='Prototype_desktop_3' 
                className=""
                width={500}
                height={1000} />
            </div>
        </div>
    </div>
  )
}

export default PrototypeDesktopCos