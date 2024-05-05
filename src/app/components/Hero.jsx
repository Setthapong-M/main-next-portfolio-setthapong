import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaRegFileLines, FaRegFilePdf } from "react-icons/fa6";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='md:flex md:justify-center'>
        <div className='my-20 max-w-screen-xl md:flex md:justify-evently md:gap-x-20'>
            <div className='flex flex-col gap-y-12 px-6'>
                <div className='flex flex-col gap-y-6'>
                    <h2 className='text-3xl'>Hello, I'm</h2>
                    <h1 className='text-5xl'>Setthapong Maknoun</h1>
                    <div className='flex items-end gap-x-2'>
                        <h2 className='text-3xl '>I am a </h2>
                        <TypeAnimation className='text-4xl'
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Web Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Front-end Developer',
                            1000,
                            'Web Designer',
                            1000,
                            'Mobile Designer',
                            1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                
                <div className=''>
                    <p className='md:flex max-w-lg'>
                        I am looking for the opportunity to be Web developer (Front-end developer). I would like to use my abilities to be an excellent Web developer.
                    </p>
                </div>
                    <ul className='flex gap-x-6 '>
                        <li><Link href='https://github.com/Setthapong-M'><FaGithub className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                        <li><Link href='https://www.linkedin.com/in/setthapong-maknoun-b42a28228/'><FaLinkedin className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                        <li><Link href='https://www.figma.com/proto/9VhkZ8WwvWIuR3DHdmTZpo/Re%CC%81sume%CC%81?page-id=507%3A31&type=design&node-id=507-32&viewport=589%2C424%2C0.86&t=K2vQFKtSi6dEOz4J-1&scaling=min-zoom&mode=design'><FaRegFileLines className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                    </ul>
            </div>
            <div className='flex justify-center'>
            <Image 
                src='/profile.jpeg' 
                alt='Profile picture' 
                className="mt-12 w-80 h-80 rounded-full border border-black object-cover"
                width={500}
                height={500} 
                priority
                />
            </div>
            
        </div>
    </div>
    
  )
}

export default Hero