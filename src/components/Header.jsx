import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import profile from "../Images/profile.png"

const Header = () => {
  return (
    <section className='flex justify-between items-center p-6 w-full h-20 bg-white'>
        <div className='flex justify-between items-center w-[15%]'>
          <div className='font-semibold'>LOGO</div>
          <div><MdOutlineMenu size={25} className='cursor-pointer' /></div>
          <div className='font-bold'>Dashboard</div>
        </div>
        <div className='flex justify-center items-center w-[25%] relative overflow-hidden'>
          <input type='text' placeholder='Search...' className='rounded-md bg-slate-100 px-4 py-1 w-full' />
          {/* <div className='bg-slate-50 py-1.5 px-2 absolute -right-0.5 rounded-l-none rounded-r-md'><IoSearch className='cursor-pointer' size={20} /></div> */}
        </div>
        <div className='flex justify-around items-center w-[20%]'>
          <div className='relative'>
            <IoNotifications size={25} className='cursor-pointer'/>
            <div className='bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex justify-center items-center absolute top-[-5px] right-[-3px] cursor-pointer'>13</div>
          </div>
          <div className='flex justify-end items-center'>
            <div className='mx-3 text-right'>
              <p>Mohamed Akmal</p>
              <p className='text-gray-400'>Admin</p>
            </div>
            <img src={profile} alt='profile image' className=' w-10 h-10 rounded-full cursor-pointer' />
          </div>
        </div>
    </section>
  )
}

export default Header