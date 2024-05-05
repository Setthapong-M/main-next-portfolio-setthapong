"use client"

import React from 'react'
import { FaArrowUp } from "react-icons/fa6";


function TopButton() {
    const top = () => {window.scrollTo(0,0)};

    return (
        <button onClick={top} className='bg-green-indust fixed w-12 h-12 right-0 bottom-0 m-6 rounded-full border border-black cursor-pointer hover:bg-yellow-300'>
            <div className='flex justify-center'>
                <FaArrowUp className='w-5 h-5'/>
            </div>
        
        </button>
    )
}

export default TopButton