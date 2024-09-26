import React from 'react'
import banner from '../../assets/images/bannar.png'
export default function Banner() {
  return (
    <div
      className="mx-4 h-72 md:h-[500px] bg-cover bg-center items-center text-white md:mx-24 mt-4 rounded-lg p-4 "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='space-y-4 text-center'>
        <h3 className="text-xl md:text-3xl mt-10  md:mt-64">Discover an exceptional cooking class tailored for you!</h3>
        <p className='text-sm md:text-lg text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        <div className='flex mx-4 justify-center gap-4'>
          <button className='btn bg-red-500 rounded-full  text-white'>Explore Now</button>
          <button className='btn bg-slate-200 rounded-full  text-black'>Explore Now</button>
        </div>
      </div>
    </div>
  )
}
