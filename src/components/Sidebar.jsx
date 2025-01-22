import React from 'react'
import { MdDashboard } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <nav className='bg-white p-2 flex flex-col justify-between items-center h-[100vh]'>
      <ul className=''>
        <li className='mt-5 mb-14'><MdDashboard size={35} fill='white' className='bg-red-500 p-1 rounded-md' /></li>
        <li className='mt-5 mb-14'><SlBookOpen size={35} className='p-1 rounded-md cursor-pointer hover:bg-slate-100' /></li>
        <li className='mt-5 mb-14'><FaUserFriends size={35} className='p-1 rounded-md cursor-pointer hover:bg-slate-100' /></li>
        <li className='mt-5 mb-14'><IoSettingsOutline size={35} className='p-1 rounded-md cursor-pointer hover:bg-slate-100' /></li>
        <li className='mt-5 mb-14'><MdOutlineFeedback size={35} className='p-1 rounded-md cursor-pointer hover:bg-slate-100' /></li>
        <li className='mt-20 mb-8'><IoMdLogOut size={35} className='p-1 rounded-md cursor-pointer hover:bg-slate-100' /></li>
      </ul>
    </nav>
  )
}

export default Sidebar