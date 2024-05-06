import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Casestudy() {
  return (
    <div id='portfolio-section' className='flex flex-col pt-20 pb-40 gap-y-20'>
        <h1 className='text-4xl text-center'>Portfolio</h1>
        <div className='flex flex-col gap-20 px-6 mb-20 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='relative'>
                    <Image
                    src='/pd-1.png' 
                    alt='Macbook' 
                    className="max-h-96 w-[500px] "
                    width={1000}
                    height={1000}
                    priority
                ></Image>
                <Image
                    src='/pm-1.png' 
                    alt='Macbook' 
                    className="hidden md:block absolute md:max-w-32 md:max-h-64 w-full h-full right-0 -bottom-12"
                    width={1000}
                    height={1000}
                    priority
                ></Image>
                </div>
                
            </div>
            <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl font-bold text-center md:text-start'>MIDDLEMAN (Design)</h1>
                <div className='max-w-lg mx-auto text-center md:text-justify'>
                    <p>A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud.</p>
                    <ul className='my-6'>
                        <li>Project Type: End-to-end app + branding</li>
                        <li>Role: UX/UI designer + branding designer</li>
                        <li>Reference: Customer experience /User experience/ User interface </li>
                    </ul>
                    <Link href='/middleman-design'><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl mt-6'>View case study</button></Link>
                </div>
            </div>
        </div>

        <div className='flex flex-col-reverse gap-20 px-6 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end'>
                <div className='flex flex-col gap-y-6 md:max-w-lg'>
                    <h1 className='text-4xl font-bold text-center md:text-start'>Cosmetic Project</h1>
                    <div className='max-w-lg mx-auto text-center md:text-justify'>
                        <p>This project is designing a user interface by FutureSkill. That was designed for an e-commerce website.</p>
                        <ul className='my-6'>
                            <li>Project Type: Design user interface + responsive</li>
                            <li>Role: UI designer</li>
                            <li>Reference: User interface </li>
                        </ul>
                        <Link href='/cosmetic-ui'><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl mt-6'>View case study</button></Link>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-center items-center md:justify-start '>
                <div className='relative'>
                    <Image
                        src='/pd-1-cos.png' 
                        alt='Macbook_cosmetic' 
                        className="max-h-96 relative w-[500px]"
                        width={1000}
                        height={1000}
                        priority
                    ></Image>
                    <Image
                        src='/pm-1-cos.png' 
                        alt='Phone_cosmetic' 
                        className="hidden md:block absolute md:max-w-32 md:max-h-64 w-full h-full right-0 -bottom-12"
                        width={1000}
                        height={1000}
                        priority
                    ></Image>
                </div>
                
            </div>
            
        </div>
    </div>
    
    
  )
}

export default Casestudy