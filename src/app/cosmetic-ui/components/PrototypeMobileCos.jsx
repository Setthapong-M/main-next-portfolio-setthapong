import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PrototypeMobileCos() {
    let pm = "https://www.figma.com/proto/c00PUu4KUQtGEDvOIBEcTy/User-Interface-Cosmetic?page-id=58%3A2865&type=design&node-id=58-2866&viewport=431%2C340%2C0.42&t=zfaoMjg2IvuDvuRd-1&scaling=scale-down&starting-point-node-id=58%3A2866&mode=design"

  return (
    <div id='prototype-section' className='bg-grey-bg text-white p-20 flex flex-col gap-y-20'>
        <h1 className='text-4xl text-center'>Prototype</h1>

        <div className='flex flex-col-reverse gap-y-6 gap-x-72 items-center md:grid md:grid-cols-2'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='flex flex-col justify-around max-w-xl'>
                    <p className='max-w-xl text-center md:text-start'>Intro screen and onboarding</p>
                    {/* <div className='flex justify-center md:justify-start'>
                        <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-12'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button>
                    </div>             */}
                </div>
            </div>
            <div className='flex items-end'>
                <Image 
                src='/pm-1-cos.png' 
                alt='Prototype_mobile_1' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pm-2-cos.png' 
                alt='Prototype_mobile_2' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
            <div className='flex justify-center md:justify-start items-center'>
                <div className='flex flex-col'>
                    <p className='max-w-sm text-center md:text-start'>Users land on the product page and look for detail</p>
                    {/* <div className='flex justify-center md:justify-start'>
                        <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-12'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button>
                    </div> */}
                </div>
            </div>
            
        </div>

        <div className='flex flex-col-reverse gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='flex flex-col'>
                    <p className='max-w-sm text-center md:text-start'>After choosing the product, users checkout</p>
                    <div className='flex justify-center md:justify-start'>
                        <Link target='_blank' href={pm}><button className='bg-white hover:bg-grey-hold hover:text-white text-black w-64 h-16 rounded-full text-xl mt-12'>View hi-fi prototype</button></Link>
                    </div>
                </div>
            </div>
            
            <div className='flex items-end'>
                <Image 
                src='/pm-3-cos.png' 
                alt='Prototype_mobile_3' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
        </div>
    </div>
  )
}

export default PrototypeMobileCos