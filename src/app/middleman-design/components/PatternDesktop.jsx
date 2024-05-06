import React from 'react'
import Image from 'next/image'

function PatternDesktop() {
  return (
    <div id='pattern-section' className='m-20 flex flex-col gap-y-12'>
        <h1 className='text-4xl text-center'>Pattern Library</h1>
        <div className='flex flex-col gap-y-4 md:flex-row'>
            <Image 
                src='/atom.png' 
                alt='Atom' 
                className="object-cover"
                width={1000}
                height={1000} />
            <div className='flex-grow'>
                <h2 className='bg-green-indust text-3xl text-center sticky top-64 drop-shadow-2xl'>Atom <br /> (Global)</h2>
            </div>
        </div>
        <div className='flex flex-col-reverse gap-y-4 md:flex-row'>
            <div className='flex-grow'>
                <h2 className='bg-green-indust text-3xl text-center sticky top-64 drop-shadow-2xl'>Molecule <br/> (Desktop)</h2>
            </div>
            <Image 
                src='/moleculeDesktop.png' 
                alt='Molecule_desktop' 
                className="object-cover"
                width={1000}
                height={1000} />
            
        </div>
        <div className='flex flex-col gap-y-4 md:flex-row'>
            <Image 
                src='/organismDesktop.png' 
                alt='Organism_Desktop' 
                className="object-cover"
                width={1000}
                height={1000} />
            <div className='flex-grow'>
                <h2 className='bg-green-indust text-3xl text-center sticky top-64 drop-shadow-2xl'>Organism <br /> (Desktop)</h2>
            </div>
        </div>
    </div>
  )
}

export default PatternDesktop
