import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ChooseViewLeft(props) {
  return (
    <div className='py-20'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-20 px-6 md:flex-row md:justify-evenly md:items-center md:px-20'>
            <div className='flex justify-center md:justify-end md:pr-20 items-center'>
                <Image
                    src={props.img}
                    alt={props.img}
                    className="max-h-96 w-[500px]"
                    width={1000}
                    height={1000}
                    priority
                ></Image>
            </div>
            <div className='flex justify-center md:justify-start items-center'>
                <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl text-center md:text-start'>{props.title}</h1>
                <div className='max-w-lg mx-auto text-justify'>
                    <p>{props.subtitle}</p>
                    <ul className='my-6'>
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
        </div>
    </div>
  )
}

export default ChooseViewLeft