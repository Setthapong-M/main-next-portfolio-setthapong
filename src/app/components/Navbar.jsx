import React from 'react'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa6";

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
    setIsMenu(!isMenu)

    }
    return (
    <nav className='bg-grey-black text-white justify-center'>
        <div className='w-full mx-auto max-w-screen-2xl h-20 flex justify-between items-center'>
            <Link href="/" className='ml-6 text-2xl md:ml-20'>Setthapong Port</Link>
            

            <ul className='hidden md:flex gap-x-12'>
                <li><Link href="#toolkits-section">Toolkits</Link></li>
                <li><Link href="#ability-section">Ability</Link></li>
                <li><Link href="#portfolio-section">Portfolio</Link></li>
                <li><Link href="#books-section">Books</Link></li>
            </ul>
            <div className='flex items-center'>
                <div className='mr-6 md:hidden' onClick={toggleMenu}><FaBars className='w-12 h-12'/></div>
                <Link href="#contact-section"><button className='hidden md:block bg-green-indust text-grey-black w-40 h-12 rounded-full font-bold mr-20 hover:bg-yellow-300'>Hire me</button></Link>
            </div>
        </div>
        {isMenu ? (
          <ul className='flex-col md:hidden'>
                <li className='py-3 ml-12'><Link href="#toolkits-section">Toolkits</Link></li>
                <li className='py-3 ml-12'><Link href="#ability-section">Ability</Link></li>
                <li className='py-3 ml-12'><Link href="#portfolio-section">Portfolio</Link></li>
                <li className='py-3 ml-12'><Link href="#books-section">Books</Link></li>
                <li className='pt-3 pb-6 ml-12'><Link href="#contact-section">Contact</Link></li>
          </ul>
        ) : null}
    </nav>
  )
}

export default Navbar