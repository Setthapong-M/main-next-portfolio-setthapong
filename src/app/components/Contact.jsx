"use client"

import React, { useState } from 'react'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!firstName || !lastName || !email || !content) {
            setError("Please complete all inputs")
            return;
        }

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, email, content
                })
            })

            if(res.ok){
                const form = e.target;
                setError("");
                setSuccess("Thank you for contacting me")
                form.reset();
            }else{
                console.log("Transaction failed.");
            }

        } catch(error){
            console.log("Error during transaction", error)
        }
    }

    

  return (
    <div id='contact-section' className='py-20 bg-grey-black text-white flex justify-center'>
        <div className='max-w-screen-xl md:flex md:justify-between'>
            {/* contact info */}
            <div className='flex flex-col gap-y-6 px-6 mb-12 '>
                <h2 className='text-3xl'>Get in touch</h2>
                <p className='md:max-w-lg'>Thank you for your interest in my work. Let's connect! <br /> Let me know if you have any additional questions.</p>
                <p>11/608 Wattana, Phrakanong nueng, <br />Bangkok, Thailand</p>
                <div className='flex flex-col gap-y-4'>
                    <p className='flex items-center gap-x-2'><FaPhone />(+66) 97-495-1635</p>

                    <p className='flex items-center gap-x-2'><FaEnvelope />setthapong.maknoun@gmail.com</p>
                </div>
            </div>

            {/* fill of contact */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 px-6 '>

                <div className='flex flex-col justify-between gap-6 md:flex-row'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='first_name'>First name</label>
                        <input type='text' id='first_name' onChange={(e) => setFirstName(e.target.value)} placeholder='Enter first name' className='w-full h-12 pl-4 rounded-lg border border-black text-black'></input>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='last_name'>Last name</label>
                        <input type='text' id='last_name' onChange={(e) => setLastName(e.target.value)} placeholder='Enter last name' className='w-full h-12 pl-4 rounded-lg border border-black text-black'></input>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='email_address'>Email address</label>
                    <input type='text' id='email_address' onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='w-full h-12 pl-4 rounded-lg border border-black text-black'></input>
                </div>
                <div>
                    <label htmlFor='message'>Your massage</label>
                    <textarea cols='30' id='message' onChange={(e) => setContent(e.target.value)} rows="10" placeholder='Type here' className='w-full h-28 pl-4 pt-4 rounded-lg border border-black text-black'></textarea>
                </div>
                <button className='border border-black w-40 h-12 rounded-lg bg-white text-black hover:bg-gray-200 cursor-not-allowed text-xl' type='submit' disabled >Submit</button>
                {error && (
                    <div className='bg-red-500 w-full flex justify-center text-sm text-white py-1 px-3 rounded-xl'>
                        {error}
                    </div>
                )}
                {success && (
                    <div className='bg-green-500 w-full flex justify-center text-sm text-white py-1 px-3 rounded-xl'>
                        {success}
                    </div>
                )}
            </form>
            
        </div>
    </div>
    
  )
}

export default Contact