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
                        <h2 className='md:hidden text-3xl'>I'm a </h2>
                        <h2 className='hidden md:block text-3xl'>I am a </h2>
                        <TypeAnimation className='text-3xl'
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Front-end Developer',
                            1000,
                            'Web Designer',
                            1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                
                <div className=''>
                    <p className='md:flex max-w-lg'>
                        I transfer to the career path. However, I graduated from civil engineering. I have thoroughly enjoyed class computer programming, this included. That is a motivation to be drawn towards the programming world. Since that time, I still gain new knowledge continuously to prove my ability to learn.
                    </p>
                </div>
                    <ul className='flex gap-x-6 '>
                        <li><Link href='https://github.com/Setthapong-M'><FaGithub className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                        <li><Link href='https://www.linkedin.com/in/setthapong-maknoun-b42a28228/'><FaLinkedin className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                        <li><Link href='https://drive.google.com/file/d/1NsCchAB9UT9gx5TSwVGaU1JzU5nWUW6d/view?usp=sharing'><FaRegFileLines className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
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