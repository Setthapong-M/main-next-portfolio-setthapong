import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ChooseViewRight(props) {
  return (
    <div className='py-20'>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-20 px-6 md:px-20 md:justify-center'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='flex flex-col text-center md:text-start gap-y-6 max-w-lg'>
                    <h1 className='text-4xl '>{props.title}</h1>
                    <div className='max-w-lg mx-auto text-justify'>
                        <p>{props.subtitle}</p>
                        <ul className='my-6 text-start'>
                            <li>{props.p1}</li>
                            <li>{props.p2}</li>
                            <li>{props.p3}</li>
                        </ul>
                        <div className='flex justify-center md:justify-start'>
                            <Link target={props.target} href={props.href}><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl mt-6'>{props.btn}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center md:pl-20 items-center'>
                <div className='md:max-w-lg md:w-full'>
                    <Image
                    src={props.img} 
                    alt={props.img}
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

export default ChooseViewRight