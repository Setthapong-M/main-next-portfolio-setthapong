import React from 'react'
import { FaFigma, FaReact, FaJava, FaJs, FaGitAlt } from "react-icons/fa6";
import { DiMsqlServer, DiGrails  } from "react-icons/di";
import { SiPostgresql , SiKotlin  } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Toolkits() {
  return (
    <div id='toolkits-section' className='bg-green-indust flex flex-col py-20 gap-y-20 '>
        <h1 className='text-4xl text-center'>Toolkits</h1>
        <div className=''>
          <ul className='flex flex-col justify-center gap-12 items-center md:max-w-screen-xl md:mx-auto md:flex-row md:justify-around md:px-20'>
            <li><FaFigma className='w-24 h-24'/></li>
            <li><FaReact className='w-24 h-24'/></li>
            <li><FaJs className='w-24 h-24'/></li>
            <li><FaGitAlt className='w-24 h-24'/></li>
            <li><DiGrails className='w-24 h-24'/></li>
            <li><FaJava className='w-24 h-24'/></li>
            <li><DiMsqlServer className='w-24 h-24'/></li>
            <li><SiPostgresql className='w-24 h-24'/></li>
        </ul>
        </div>
        
    </div>
  )
}
export default Toolkits