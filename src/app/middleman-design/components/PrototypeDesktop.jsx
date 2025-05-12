import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PrototypeDesktop() {
    let pd = "https://www.figma.com/proto/MJnzt1FROiH7s3B32PxrRC/MVP-Middleman_Pro-Mark-III?page-id=389%3A3614&type=design&node-id=403-762&viewport=52%2C388%2C0.06&t=VpoRWeJzFGslTXZg-1&scaling=scale-down&starting-point-node-id=403%3A762&mode=design"
  return (
    <div id='prototype-section' className='bg-grey-bg text-white p-20 flex flex-col gap-y-20'>
        <h1 className='text-4xl text-center'>Prototype</h1>

        <div className='flex flex-col-reverse items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end md:pr-20'>
                <div className='flex flex-col justify-around'>
                    <p className='max-w-xl text-center md:text-start'>Intro screen and onboarding</p>
                    <Link target='_blank' href={pd}><button className='bg-white hover:bg-grey-hold hover:text-white text-black w-64 h-16 rounded-full text-xl mt-6'>View hi-fi prototype</button></Link>
                </div>
            </div>
            <div className='flex items-end'>
                <Image 
                src='/pd-1.png' 
                alt='Prototype_desktop_1' 
                className=""
                width={500}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pd-2.png' 
                alt='Prototype_desktop_2' 
                className=""
                width={500}
                height={1000} />
            </div>
            <div className='flex justify-start'>
               <div className='flex flex-col justify-around items-center'>
                    <p className='max-w-md text-center md:text-start'>Users land on the logging in or signing up page before beginning the middleman</p>
                    {/* <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button> */}
                </div> 
            </div>
            
        </div>

        <div className='flex flex-col-reverse items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <div className='flex flex-col items-center md:justify-around'>
                    <p className='max-w-md text-center md:text-start'>Negotiation is an alternative feature for users who are in trouble, can use this feature to help them</p>
                    {/* <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button> */}
                </div>
            </div>
            <div className='flex'>
                <Image 
                src='/pd-3.png' 
                alt='Prototype_desktop_3' 
                className=""
                width={500}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pd-4.png' 
                alt='Prototype_desktop_4' 
                className=""
                width={500}
                height={1000} />
            </div>
            <div className='flex justify-start'>
                <div className='flex flex-col items-center justify-around'>
                    <p className='max-w-md text-center md:text-start'>Users(sellers) are creating a product for trade with other users(buyers)</p>
                    {/* <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button> */}
                </div>
            </div>
            
        </div>

        <div className='flex flex-col-reverse items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <div className='flex flex-col items-center justify-around'>
                    <p className='max-w-md text-center md:text-start'>Users(sellers) can recheck the product to be sure, that users(buyers) can do the same before starting a transaction</p>
                    {/* <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button> */}
                </div>
            </div>
            
            <div className='flex'>
                <Image 
                src='/pd-5.png' 
                alt='Prototype_desktop_5' 
                className=""
                width={500}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col items-center gap-y-6 gap-x-40 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pd-6.png' 
                alt='Prototype_desktop_6' 
                className=""
                width={500}
                height={1000} />
            </div>
            <div >
                <div className='flex flex-col'>
                    <p className='max-w-md text-center md:text-start'>After the users(sellers) send the product to other users(buyers), who will update a tracking number to track the parcel and inform other users (buyers) let them know</p>
                    <div className='flex justify-center md:justify-start'>
                        <Link target='_blank' href={pd}><button className='bg-white hover:bg-grey-hold hover:text-white text-black w-64 h-16 rounded-full text-xl mt-6'>View hi-fi prototype</button></Link>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default PrototypeDesktop