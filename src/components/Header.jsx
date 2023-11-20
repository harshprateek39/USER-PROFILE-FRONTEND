import React from 'react'
import logo1 from './assets/logo2.png'
const Header = () => {
  return (
    <div className=' flex justify-between bg-neutral-950 md:px-10 px-1 py-2 items-center'>
      <img  src= {logo1} className=' md:h-14 h-8  rounded-lg drop-shadow-sm shadow-neutral-950'/>
      <button className=' bg-yellow-500 px-3 md:h-12 h-8 font-bold text-neutral-900 rounded-lg' >Courses</button>
    </div>
  )
}

export default Header