import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PrototypeMobile() {
    let pm = "https://www.figma.com/proto/MJnzt1FROiH7s3B32PxrRC/MVP-Middleman_Pro-Mark-III?page-id=434%3A2225&type=design&node-id=434-2226&viewport=389%2C325%2C0.14&t=6N7Z8gs0H5aLHiPi-1&scaling=scale-down&starting-point-node-id=434%3A2226&mode=design"
  return (
    <div id='prototype-section' className='bg-grey-bg text-white p-20 flex flex-col gap-y-20'>
        <h1 className='text-4xl text-center'>Prototype</h1>

        <div className='flex flex-col-reverse gap-y-6 gap-x-72 items-center md:grid md:grid-cols-2'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='flex flex-col justify-around max-w-xl'>
                    <p className='max-w-xl text-center md:text-start'>Intro screen and onboarding</p>
                    <div className='flex justify-center md:justify-start'>
                        <Link href={pm}><button className='bg-white hover:bg-grey-hold hover:text-white text-black w-64 h-16 rounded-full text-xl mt-6'>View hi-fi prototype</button></Link>
                    </div>            
                </div>
            </div>
            <div className='flex items-end'>
                <Image 
                src='/pm-1.png' 
                alt='Prototype_mobile_1' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pm-2.png' 
                alt='Prototype_mobile_2' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
            <div className='flex justify-center md:justify-start items-center'>
                <div className='flex flex-col'>
                    <p className='max-w-md text-center md:text-start'>Users land on the logging in or signing up page before beginning the middleman</p>
                    {/* <div className='flex justify-center md:justify-start'>
                        <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button>
                    </div> */}
                </div>
            </div>
            
        </div>

        <div className='flex flex-col-reverse gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='flex flex-col'>
                    <p className='max-w-md text-center md:text-start'>Negotiation is an alternative feature for users who are in trouble, can use this feature to help them</p>
                    {/* <div className='flex justify-center md:justify-start'>
                        <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button>
                    </div> */}
                </div>
            </div>
            
            <div className='flex items-end'>
                <Image 
                src='/pm-3.png' 
                alt='Prototype_mobile_3' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pm-4.png' 
                alt='Prototype_mobile_4' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
            <div className='flex justify-center md:justify-start items-center'>
                <div className='flex flex-col justify-around'>
                    <p className='max-w-md text-center md:text-start'>Users(sellers) are creating a product for trade with other users(buyers)</p>
                    {/* <div className='flex justify-center md:justify-start'>
                        <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button>
                    </div> */}
                </div>
            </div>
            
        </div>

        <div className='flex flex-col-reverse gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='flex flex-col'>
                    <p className='max-w-md text-center md:text-start'>Users(sellers) can recheck the product to be sure, that users(buyers) can do the same before starting a transaction</p>
                    {/* <div className='flex justify-center md:justify-start'>
                        <button className='bg-white text-black w-64 h-16 rounded-full text-xl mt-6'><Link href='/middleman-case-study'>View hi-fi prototype</Link></button>
                    </div>             */}
                </div>
            </div>
            
            <div className='flex items-end'>
                <Image 
                src='/pm-5.png' 
                alt='Prototype_mobile_5' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
        </div>

        <div className='flex flex-col gap-y-6 items-center gap-x-72 md:grid md:grid-cols-2'>
            <div className='flex justify-end'>
                <Image 
                src='/pm-6.png' 
                alt='Prototype_mobile_6' 
                className="max-w-48 max-h-96"
                width={1000}
                height={1000} />
            </div>
            <div>
                <div className='flex flex-col'>
                    <p className='max-w-md text-center md:text-start'>After the users(sellers) send the product to other users(buyers), who will update a tracking number to track the parcel and inform other users (buyers) let them know</p>
                    <div className='flex justify-center md:justify-start'>
                    <Link href={pm}><button className='bg-white hover:bg-grey-hold hover:text-white text-black w-64 h-16 rounded-full text-xl mt-6'>View hi-fi prototype</button></Link>
                    </div>            
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PrototypeMobile