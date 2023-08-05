import React from 'react'
import html from '../images/stack/HTML.png'
import css from '../images/stack/CSS.png'
import javascript from '../images/stack/Javascript.svg'
import react from '../images/stack/React.png'
import tailwind from '../images/stack/Tailwind.png'
import express from '../images/stack/Express.png'
import node from '../images/stack/NodeJs.svg'
import mongo from '../images/stack/MongoDB.svg'
import { Skillscaet } from './Skillscaet'
export const Skill = () => {
  
  const pressBprev = () =>{
    let box = document.querySelector(".skill")
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft - width;
    console.log(width);
  }
  const pressBnext = () =>{
    let box = document.querySelector(".skill")
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft +  width;
    console.log(width);
  }

  return (
    <div className='flex justify-center'>
        <div  className='w-[90%] lg:w-[80%] h-[400px]  bg-slate-900 border-transparent rounded-lg my-10 '>
            <div>
            <p className='text-3xl font-bold text-center text-slate-100 my-2'>Skills</p>
            <p className=' text-center text-slate-100' >Please check the projects for the web dev skill and my leetcode for the DSA skill also<br/>
            you can check my linkedin social icon</p>
            </div>
            <button className='pre-btn border rounded-md lg:hidden' onClick={pressBprev}><p className='text-white'>&lt;</p></button>
            <button className='next-btn border rounded-md lg:hidden' onClick={pressBnext}><p className='text-white'>&gt;</p></button> 
        <div className='skill w-[100%] h-[30%] lg:h-[80%] flex lg:items-center lg:justify-center  border-transparent rounded-md'>
            <Skillscaet img={html} skillname={"HTML"}/>
            <Skillscaet img={css} skillname={"CSS"}/>
            <Skillscaet img={javascript} skillname={"JavScript"}/>
            <Skillscaet img={react} skillname={"React"}/>
            <Skillscaet img={tailwind} skillname={"Tailwind"}/>
            <Skillscaet img={express} skillname={"Express"}/>
            <Skillscaet img={node} skillname={"NodeJs"}/>
            <Skillscaet img={mongo} skillname={"MongoDB"}/>
            </div>
            
        </div>
        
        </div>
  )
}
