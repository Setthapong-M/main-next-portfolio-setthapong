import React from 'react'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa6";

function NavCaseStudyDesktopCos() {
    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
    setIsMenu(!isMenu)

    }
    return (
    <nav className='bg-grey-black text-white justify-center'>
        <div className='w-full mx-auto max-w-screen-2xl h-20 flex justify-between items-center'>
            <Link href="/" className='ml-6 text-2xl md:ml-20'>Setthapong Port</Link>
            

            <ul className='hidden md:flex gap-x-12'>
                <li><Link href="#content-section">Content</Link></li>
                <li><Link href="#wireframe-section">Wireframe</Link></li>
                <li><Link href="#pattern-section">Pattern Library</Link></li>
                <li><Link href="#prototype-section">Prototype</Link></li>
            </ul>
            <div className='flex items-center'>
                <div className='mr-6 md:hidden' onClick={toggleMenu}><FaBars className='w-12 h-12'/></div>
                <Link href="/#contact-section"><button className='hidden md:block bg-green-indust hover:bg-yellow-300 text-grey-black w-40 h-12 rounded-full font-bold mr-20'>Hire me</button></Link>
            </div>
        </div>
        {isMenu ? (
          <ul className='flex-col md:hidden'>
                <li className='py-3 ml-12'><Link href="#content-section">Content</Link></li>
                <li className='py-3 ml-12'><Link href="#wireframe-section">Wireframe</Link></li>
                <li className='py-3 ml-12'><Link href="#pattern-section">Pattern Library</Link></li>
                <li className='pt-3 pb-6 ml-12'><Link href="#prototype-section">Prototype</Link></li>
          </ul>
        ) : null}
    </nav>
  )
}

export default NavCaseStudyDesktopCos