import React from 'react'
import groot from '../images/userAsset/groot.jpeg'
import Typewriter from "typewriter-effect"
export const Herosection = () => {
  return (
    <div className="hero-section lg:flex ">
        <div className='absolute faded-text'>Aman sharma</div>
        <div className="hero-section-left">
             <div className='hero-section-heading'>
              <p className='text-zinc-300 text-xl'>Welcome to My Portfolio</p>
              <p className='text-neutral-300 text-xl'>Hii! Aman Sharma</p>
              </div>
             <div className="hero-section-heading hero-section-sub-heading">
                <p className='text-neutral-300  text-xl'>I am a.. </p><span className='role text-[20px]'><Typewriter
                options={{
                strings: ['MernStack Developer', 'FullStack Developer'],
                autoStart: true,
                loop: true,
                }}/> </span>
                </div>
             <div className='hero-section-discription'>
             <p className='text-neutral-300  text-xl'>I'm a software developer and here is my portfolio website. Here 
                you learn my journey about as a software developer.</p>
             </div>
        </div>
        <div className=' '><img src={groot} alt="" className='animate w-[500px] z-40  border-transparent rounded-full'/></div>
    </div>
  )
}
