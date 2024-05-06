import React from 'react'
import Image from 'next/image'

function PatternMobileCos() {
  return (
    <div id='pattern-section' className='m-20 flex flex-col gap-y-12'>
        <h1 className='text-4xl text-center'>Pattern Library</h1>
        <div className='flex flex-col gap-y-4 md:flex-row md:justify-evenly'>
            <Image 
                src='/AtomCos.png' 
                alt='Atom' 
                className="object-cover "
                width={500}
                height={500} />
            <div className='max-w-md w-full'>
                <h2 className='bg-green-indust text-3xl text-center sticky top-64 drop-shadow-2xl'>Atom <br/> (Global)</h2>
            </div>
        </div>

        <div className='flex flex-col-reverse gap-y-4 md:flex-row md:justify-evenly'>
            <div className='max-w-md w-full'>
                <h2 className='bg-green-indust text-3xl text-center sticky top-64 drop-shadow-2xl'>Molecule <br/> (Mobile)</h2>
            </div>
            <Image 
                src='/moleculesMobileCos.png' 
                alt='Molecule_mobile' 
                className="object-cover"
                width={500}
                height={500} />
        </div>
        <div className='flex flex-col gap-y-4 md:flex-row md:justify-evenly'>
            <Image 
                src='/organismMobileCos.png' 
                alt='Organism_mobile' 
                className="object-cover"
                width={500}
                height={500} />
            <div className='max-w-md w-full'>
                <h2 className='bg-green-indust text-3xl text-center sticky top-64 drop-shadow-2xl'>Organism <br /> (Mobile)</h2>
            </div>
        </div>
    </div>
  )
}

export default PatternMobileCos