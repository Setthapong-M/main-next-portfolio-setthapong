import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HeadingMobile() {
    let pm = "https://www.figma.com/proto/MJnzt1FROiH7s3B32PxrRC/MVP-Middleman_Pro-Mark-III?page-id=434%3A2225&type=design&node-id=434-2226&viewport=389%2C325%2C0.14&t=6N7Z8gs0H5aLHiPi-1&scaling=scale-down&starting-point-node-id=434%3A2226&mode=design"
  return (
    <div className='py-20'>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-20 px-6 md:px-20 md:justify-center'>
        <div className='flex justify-center md:justify-end items-center'>
            <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl font-bold text-center md:text-start'>MIDDLEMAN (Mobile)</h1>
                <div className='max-w-lg mx-auto text-justify'>
                    <p>A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud.</p>
                    <ul className='my-6'>
                        <li>Project Type: End-to-end app + branding</li>
                        <li>Role: UX/UI designer + branding designer</li>
                        <li>Reference: Customer experience /User experience/ User interface </li>
                    </ul>
                    <div className='flex justify-center md:justify-start'>
                        <Link href={pm}><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl mt-6'>View hi-fi prototype</button></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center md:pl-20 items-center'>
            <div className='md:max-w-lg md:w-full'>
               <Image
                src='/pm-1.png' 
                alt='Macbook' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000}
            ></Image> 
            </div>
            
        </div>
        </div>
    </div>
    
    
  )
}

export default HeadingMobile