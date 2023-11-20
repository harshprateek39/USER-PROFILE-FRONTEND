import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
const Threads = ( {title, description , date , read , views} ) => {
  return (
    <div className=' flex flex-col '>
                <div className=' flex justify-between items-center py-10 lg:px-6 px-2 '>
                    <h1 className=' text-l md:text-3xl font-bold text-black' > {title}</h1>
                    <span className=' flex items-center justify-center rounded-full p-1 bg-yellow-500 text-white'>
             <FaRegThumbsUp />
             </span> 
           
                 </div>
                <h1 className=' text-md md:text-2xl text-gray-500 lg:px-6 px-2 '>{description}</h1>
 
           <div className=' flex justify-between items-center py-10 lg:px-6 px-2  gap-5' >
            <h1 className=' font-sans font-bold text-gray-500  text-xs md:text-xl '><span className=' text-blue-400 font-sans font-bold'>musing</span> by anujgosalia</h1>
            <h1 className=' text-gray-500 md:text-xl text-xs  '>{date} · {read}· {views} views</h1>
           </div>
           <hr className=' w-full  border-1 border-gray-200 self-end'></hr>
            </div>
  )
}

export default Threads