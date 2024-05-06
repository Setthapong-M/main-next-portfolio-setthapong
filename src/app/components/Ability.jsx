import React from 'react'
import { FaPaintbrush, FaSuitcase, FaDesktop } from "react-icons/fa6";

function Ability() {
  return (
    <div id='ability-section' className='flex flex-col py-20 gap-y-20'>
        <h1 className='text-4xl text-center'>My Ability</h1>
        <div className='flex flex-col gap-y-20 justify-center items-center md:max-w-screen-lg md:mx-auto md:flex-row md:gap-x-20'>
            <div className='flex flex-col gap-y-4 justify-center items-center w-56'>
                <FaPaintbrush className='min-w-24 min-h-24'/>
                <h2 className='text-3xl font-bold'>Design Work</h2>
                <p className='text-center'>I have taken classes in customer experience, UX design, and UI design. I have designed a product about services with an educational background. I'm an empathetic designer, a data-driven decision-maker.</p>
            </div>
            <div className='flex flex-col gap-y-4 justify-center items-center w-56'>
                <FaDesktop className='min-w-24 min-h-24'/>
                <h2 className='text-3xl font-bold'>Front-end Work</h2>
                <p className='text-center'>I have taken a class on the web development bootcamp about fundamental HTML5, CSS, JavaScript, Node.js, React.js, Next.js and Database. Meanwhile, this website was created by myself.</p>
            </div>
            
            <div className='flex flex-col gap-y-4 justify-center items-center w-56'>
                <FaSuitcase  className='min-w-24 min-h-24'/>
                <h2 className='text-3xl font-bold'>Business Work</h2>
                <p className='text-center'>I have taken a class on the art of performing a successful business about the business administration and learned from books on business, management, investment, and financial.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Ability