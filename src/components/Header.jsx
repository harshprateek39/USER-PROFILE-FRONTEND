import React from 'react'
import logo1 from './assets/logo.png'
const Header = () => {
  return (
    <div className=' flex justify-between  md:px-10 px-5 py-3 md:py-6 md:h-16 items-center ' style={{backgroundColor:"#111111"}}>
    <div className='flex gap-3 items-center '>
    <img  src= {logo1} className=' md:h-10 h-8   '/>
    <div className=' w-0.5 bg-yellow-500 self-stretch '></div>
    <p className='text-white md:font-3xl font-xl font-bold'>S T O R I E S</p>
    </div>
   
      <button className=' bg-yellow-500 px-3 md:h-12 h-8 font-bold text-neutral-900 rounded-lg' >Courses</button>
    </div>
  )
}

export default Header