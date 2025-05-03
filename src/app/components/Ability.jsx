import React from 'react'
import { FaPaintbrush, FaSuitcase, FaDesktop } from "react-icons/fa6";

function Ability() {
  return (
    <div id='ability-section' className='flex flex-col pt-20 gap-y-20'>
        <h1 className='text-4xl text-center'>My Ability</h1>
        <div className='flex flex-col gap-y-20 justify-center items-start md:max-w-screen-xl md:mx-auto md:flex-row md:gap-x-20'>
            <div className='flex flex-col gap-y-4 justify-center items-center w-64'>
                <FaPaintbrush className='min-w-24 min-h-24'/>
                <h2 className='text-3xl font-bold text-center'>Design Work</h2>
                <p className='text-center'>I have taken classes in customer experience, UX design, and UI design. I have designed a product about services with an educational background. I'm an empathetic designer, a data-driven decision-maker.</p>
            </div>

            <div className='flex flex-col gap-y-4 justify-center items-center w-64'>
                <FaDesktop className='min-w-24 min-h-24'/>
                <h2 className='text-3xl font-bold text-center'>Development Work</h2>
                <p className='text-center'>Designed and developed the internal website for Thai Red Cross Societ's administrators and volunteers, Department of Water Resources, and Mitrphol-Cassavamis</p>
            </div>
            
            <div className='flex flex-col gap-y-4 justify-center items-center w-64'>
                <FaSuitcase  className='min-w-24 min-h-24'/>
                <h2 className='text-3xl font-bold text-center'>Business Work</h2>
                <p className='text-center'>Participated in project meetings, with technical staff members, and business analysts and learned from books on business, management, investment, and financial.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Ability