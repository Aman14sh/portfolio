import React from 'react'

export const Skillscaet = (props) => {
  return (
    <div className='cart flex-col lg:w-[100px] border-transparent rounded-md lg:m-5  bg-slate-900'>
         <img src={props.img} alt="" className='w-[100%]'/>
         <p className='text-center text-white text-[10px] lg:text-xl font-bold'>{props.skillname}</p>
    </div>
  )
}