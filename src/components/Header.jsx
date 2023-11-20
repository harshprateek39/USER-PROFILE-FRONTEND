import React from 'react'
import logo1 from './assets/logo2.png'
const Header = () => {
  return (
    <div className=' flex justify-between bg-neutral-950 md:px-10 px-1 py-2 items-center'>
      <img  src= {logo1} className=' h-14 rounded-lg drop-shadow-sm shadow-neutral-950'/>
      <button className=' bg-yellow-500 px-3 h-12 font-bold text-neutral-900 rounded-lg' >Courses</button>
    </div>
  )
}

export default Header