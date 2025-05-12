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
                            'Full-Stack Developer',
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
                        +1 year of experience transitioning from Civil Engineering to web development. Highly skilled in full-stack web development, including requirement gathering, UX/UI design, and testing. Successfully contributed to multiple high-impact projects, including internal websites for the Thai Red Cross Society, Department of Water Resources, and Mitrphol-Cassavamis, driving improvements in user experience and operational efficiency. Passionate about delivering innovative, scalable solutions that align with client needs and business goals.
                    </p>
                </div>
                    <ul className='flex gap-x-6 '>
                        <li><Link href='https://github.com/Setthapong-M' target='_blank'><FaGithub className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                        <li><Link href='https://www.linkedin.com/in/setthapong-maknoun-b42a28228/' target='_blank'><FaLinkedin className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                        <li><Link href='https://drive.google.com/file/d/1RalOaphv7FkFV9K9iURuoD6Ys2npOlLf/view?usp=sharing' target='_blank'><FaRegFileLines className='w-12 h-12 hover:text-grey-black/90'/></Link></li>
                    </ul>
            </div>
            <div className='flex justify-center'>
            <Image 
                src='/profile.jpg'
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