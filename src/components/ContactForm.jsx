import React from 'react'

export const ContactForm = () => {
  return (
    <form >
    <div className='flex justify-center'>
      
    <div className='contact-form w-[80%] h-[500px] lg:h-[600px] my-5 flex flex-col items-center '>
    <p className='text-2xl text-white font-bold  my-10 '> Contact Info </p>
    <input type="text" id="name" className='border border-transparent rounded-md bg-cyan-950 p-2 my-2 'placeholder='Name'/>
    <input type="text" id="lastname" className='border border-transparent rounded-md bg-cyan-950 p-2 my-2' placeholder='userName'/>
    <input type="email" id="email" className=' border border-transparent rounded-md bg-cyan-950 p-2 my-2' placeholder='email'/>
    <input type="text" id="phone" className=' border border-transparent rounded-md bg-cyan-950 p-2 my-2' placeholder='phone'/>
    <textarea name="textarea" cols="30" rows="4"  className=' border border-transparent rounded-md bg-cyan-950 p-2 my-2'placeholder='message'></textarea>
    <button className='p-3 bg-neutral-300 broder border-transparent rounded-md my-2'>Send</button>
     </div>
    </div>
    </form>
  )
}
