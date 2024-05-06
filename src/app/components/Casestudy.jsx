import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa6";

function Casestudy() {
  return (
    <div id='portfolio-section' className='flex flex-col pt-20 pb-40 gap-y-20'>
        <h1 className='text-4xl text-center'>Portfolio</h1>

        {/* middleman design */}
        <div className='flex flex-col gap-20 px-6 mb-20 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='relative'>
                    <Image
                    src='/pd-1.png' 
                    alt='Macbook' 
                    className="max-h-96 w-[500px] "
                    width={1000}
                    height={1000}
                    priority
                ></Image>
                <Image
                    src='/pm-1.png' 
                    alt='Macbook' 
                    className="hidden md:block absolute md:max-w-32 md:max-h-64 w-full h-full right-0 -bottom-12"
                    width={1000}
                    height={1000}
                    priority
                ></Image>
                </div>
                
            </div>
            <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl  text-center md:text-start'>MIDDLEMAN (Web Design)</h1>
                <div className='max-w-lg mx-auto text-center md:text-justify'>
                    <p>A personal project website to help people trade products that are right for need a middleman and reduce the risk of internet fraud.</p>
                    <ul className='my-6'>
                        <li>Project Type: End-to-end app + branding</li>
                        <li>Role: UX/UI designer + branding designer</li>
                        <li>Reference: Customer experience /User experience/ User interface </li>
                    </ul>
                    <Link href='/middleman-design'><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl'>View case study</button></Link>
                </div>
            </div>
        </div>

        {/* cosmetic ui */}
        <div className='flex flex-col-reverse gap-20 px-6 mb-20 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end'>
                <div className='flex flex-col gap-y-6 md:max-w-lg'>
                    <h1 className='text-4xl  text-center md:text-start'>Cosmetic Project</h1>
                    <div className='max-w-lg mx-auto text-center md:text-justify'>
                        <p>This project is designing a user interface by FutureSkill. That was designed for an e-commerce website.</p>
                        <ul className='my-6'>
                            <li>Project Type: Design user interface + responsive</li>
                            <li>Role: UI designer</li>
                            <li>Reference: User interface </li>
                        </ul>
                        <Link href='/cosmetic-ui'><button className='bg-grey-black hover:bg-grey-black/90 text-white w-72 h-16 rounded-full text-xl mt-6'>View case study</button></Link>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-center items-center md:justify-start '>
                <div className='relative'>
                    <Image
                        src='/pd-1-cos.png' 
                        alt='Macbook_cosmetic' 
                        className="max-h-96 relative w-[500px]"
                        width={1000}
                        height={1000}
                        priority
                    ></Image>
                    <Image
                        src='/pm-1-cos.png' 
                        alt='Phone_cosmetic' 
                        className="hidden md:block absolute md:max-w-32 md:max-h-64 w-full h-full right-0 -bottom-12"
                        width={1000}
                        height={1000}
                        priority
                    ></Image>
                </div>
                
            </div>
        </div>

        {/* middleman develop */}
        <div className='flex flex-col gap-20 px-6 mb-20 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end items-center'>
                <div className='relative'>
                    <Image
                    src='/pd-1.png' 
                    alt='Macbook' 
                    className="max-h-96 w-[500px] "
                    width={1000}
                    height={1000}
                    priority
                ></Image>
                {/* <Image
                    src='/pm-1.png' 
                    alt='Macbook' 
                    className="hidden md:block absolute md:max-w-32 md:max-h-64 w-full h-full right-0 -bottom-12"
                    width={1000}
                    height={1000}
                    priority
                ></Image> */}
                </div>
                
            </div>
            <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl  text-center md:text-start'>MIDDLEMAN (Web Development)</h1>
                <div className='max-w-lg text-center md:text-justify'>
                    <p>Has developed to build the website that I designed</p>
                    <ul className='my-6'>
                        <li>Project Type: Front-end development</li>
                        <li>Role: Programming user interfaces</li>
                        <li>Reference: HTML5/CSS, JavaScript, Next.js, React.js and TailwindCSS</li>
                    </ul>
                    <div className='flex gap-6 items-end'>
                        <Link href='https://next-middleman.vercel.app/'>
                            <button className=' bg-green-indust hover:bg-yellow-300 border-2 border-black text-black w-72 h-16 rounded-full text-xl'>Land to website</button>
                        </Link>
                        <Link href='https://github.com/Setthapong-M/next-middleman/tree/main/src/app'><FaGithub className='w-16 h-16 hover:text-grey-black/90'/></Link>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* poke api */}
        <div className='flex flex-col-reverse gap-20 px-6  mb-20 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end'>
                <div className='flex flex-col gap-y-6 md:max-w-lg'>
                    <h1 className='text-4xl  text-center md:text-start'>Pokemon Finder App</h1>
                    <div className='max-w-lg mx-auto text-center md:text-justify'>
                        <p>This project was created that is right for a case study to use API from https://pokeapi.co/ by FutureSkill course.</p>
                        <ul className='my-6'>
                            <li>Project Type: Rest API to front-end of application</li>
                            <li>Role: Programming an API</li>
                            <li>Reference: Rest API</li>
                        </ul>
                        <div className='flex gap-6 items-end'>
                            <Link href='https://nextjs-ep2-one.vercel.app/'>
                                <button className=' bg-green-indust hover:bg-yellow-300 border-2 border-black text-black w-72 h-16 rounded-full text-xl'>Land to website</button>
                            </Link>
                            <Link href='https://github.com/Setthapong-M/nextjs-poke-api-ep2/tree/main/src/app'><FaGithub className='w-16 h-16 hover:text-grey-black/90'/></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-center items-center md:justify-start '>
                <div className='relative'>
                    <Image
                        src='/fsEp2ApiD.png' 
                        alt='poke api' 
                        className="max-h-96 relative w-[500px]"
                        width={1000}
                        height={1000}
                        priority
                    ></Image>
                </div>
            </div>
        </div>

        {/* dashboard */}
        <div className='flex flex-col gap-20 px-6 md:grid md:grid-cols-2 md:px-20'>
            <div className='flex justify-center md:justify-end items-center'>
                <Image
                    src='/fsEp4DashboardD.png' 
                    alt='Macbook' 
                    className="max-h-96 w-[500px] "
                    width={1000}
                    height={1000}
                    priority
                ></Image>

                
            </div>
            <div className='flex flex-col gap-y-6 md:max-w-lg'>
                <h1 className='text-4xl  text-center md:text-start'>Dashboard</h1>
                <div className='max-w-lg text-center md:text-justify'>
                    <p>This project was created a dashboard and connecting database for organised authentication by FutureSkill course.</p>
                    <ul className='my-6'>
                        <li>Project Type: Back-end development</li>
                        <li>Role: Programming to build authentication and connect a database</li>
                        <li>Reference: Next-Authentication/ MongoDB/ Bcrypt</li>
                    </ul>
                    <div className='flex gap-6 items-end'>
                        <Link href='https://next-dashboard-lovat-sigma.vercel.app/'>
                            <button className=' bg-green-indust hover:bg-yellow-300 border-2 border-black text-black w-72 h-16 rounded-full text-xl'>Land to website</button>
                        </Link>
                        <Link href='https://github.com/Setthapong-M/next-dashboard/tree/main/src/app'><FaGithub className='w-16 h-16 hover:text-grey-black/90'/></Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Casestudy