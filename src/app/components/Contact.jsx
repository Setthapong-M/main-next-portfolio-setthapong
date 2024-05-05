import React from 'react'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact-section' className='py-20 bg-grey-black text-white flex justify-center'>
        <div className='max-w-screen-xl md:flex md:justify-between'>
            {/* contact info */}
            <div className='flex flex-col gap-y-6 px-6 mb-12 '>
                <h2 className='text-3xl'>Get in touch</h2>
                <p className='md:max-w-lg'>Thank you for your interest in my work. Let's connect! <br /> Let me know if you have any additional questions.</p>
                <p>11/608 Wattana, Phrakanong nueng, <br />Bangkok, Thailand</p>
                <div className='flex flex-col gap-y-4'>
                    <p className='flex items-center gap-x-2'><FaPhone />(+66) 802965398</p>

                    <p className='flex items-center gap-x-2'><FaEnvelope />setthapong.maknoun@gmail.com</p>
                </div>
            </div>

            {/* fill of contact */}
            <div className='flex flex-col gap-y-6 px-6 '>
                <div className='flex flex-col justify-between gap-6 md:flex-row'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='first name'>First name</label>
                        <input type='text' placeholder='eg. Jimmy' className='w-full h-12 pl-4 rounded-lg border border-black text-black'></input>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='last name'>Last name</label>
                        <input type='text' placeholder='eg. Choojai' className='w-full h-12 pl-4 rounded-lg border border-black text-black'></input>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='email address'>Email address</label>
                    <input type='text' placeholder='eg. jimmychoojai@nowhere.com' className='w-full h-12 pl-4 rounded-lg border border-black text-black'></input>
                </div>
                <div>
                    <label htmlFor='message'>Your massage</label>
                    <textarea cols='30' rows="10" placeholder='Type here' className='w-full h-28 pl-4 pt-4 rounded-lg border border-black text-black'></textarea>
                </div>
                <button className='border border-black w-40 h-12 rounded-lg bg-white text-gray-500 hover:bg-gray-200 cursor-not-allowed disabled:'>Submit</button>
            </div>
            
        </div>
    </div>
    
  )
}

export default Contact