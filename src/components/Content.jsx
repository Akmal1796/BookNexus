import React, { useEffect, useState } from 'react'
import { GiSandsOfTime } from "react-icons/gi";
import { BsPersonAdd } from "react-icons/bs";
import { PiNote } from "react-icons/pi";
import { HiMiniUsers } from "react-icons/hi2";
import UsersTable from './UsersTable';
import BooksTable from './BooksTable';
import BookCard from './BookCard';
import OverdueBooks from './OverdueBooks';
import IssuedBooks from './IssuedBooks';

const Content = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const year = currentDateTime.getFullYear();
    const month = monthNames[currentDateTime.getMonth()];
    const date = currentDateTime.getDate();
    const day = dayNames[currentDateTime.getDay()];
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();

  return (
    <main className='p-4'>
        <div className='flex justify-between items-center mt-8 mx-6'>
            <div>
                <h1 className='font-bold text-4xl'>Hello, <span className='text-red-500'>Akmal!</span></h1>
                <div>{month} {date}, {year} | {day}, {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className=''>
                <select name="filter" id="" className='p-2 rounded-md w-40'>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>Past Month</option>
                </select>
            </div>
        </div>
        <div className='flex justify-evenly items-center mt-12'>
            <div className='bg-white rounded-md p-4 w-[22%] flex justify-between items-start'>
                <div className='flex flex-col justify-between items-start gap-4'>
                    <div className='font-bold text-3xl'>1,234</div>
                    <div>Total Visitors</div>
                </div>
                <div><HiMiniUsers size={35} fill='white' className='rounded-full p-2 bg-red-500' /></div>
            </div>
            <div className='bg-white rounded-md p-4 w-[22%] flex justify-between items-start'>
                <div className='flex flex-col justify-between items-start gap-4'>
                    <div className='font-bold text-3xl'>720</div>
                    <div>Borrowed Books</div>
                </div>
                <div><PiNote size={35} fill='white' className='rounded-full p-2 bg-red-500' /></div>
            </div>
            <div className='bg-white rounded-md p-4 w-[22%] flex justify-between items-start'>
                <div className='flex flex-col justify-between items-start gap-4'>
                    <div className='font-bold text-3xl'>34</div>
                    <div>Overdue Books</div>
                </div>
                <div><GiSandsOfTime size={35} fill='white' className='rounded-full p-2 bg-red-500' /></div>
            </div>
            <div className='bg-white rounded-md p-4 w-[22%] flex justify-between items-start'>
                <div className='flex flex-col justify-between items-start gap-4'>
                    <div className='font-bold text-3xl'>90</div>
                    <div>New Memebers</div>
                </div>
                <div><BsPersonAdd size={35} fill='white' className='rounded-full p-2 bg-red-500' /></div>
            </div>
        </div>
        <div className='flex justify-evenly items-center mt-8'>
            <div className='bg-white p-6 rounded-md w-[47%]'>
                <div className='flex justify-between items-start'>
                    <h1 className='font-semibold text-2xl'>Users List</h1>
                    <button className='border-2 border-gray-400 hover:border-gray-600 p-2 rounded-md'>Add New User</button>
                </div>
                <div><UsersTable /></div>
            </div>
            <div className='bg-white p-6 rounded-md w-[47%]'>
                <div className='flex justify-between items-start'>
                    <h1 className='font-semibold text-2xl'>Books List</h1>
                    <button className='border-2 border-gray-400 hover:border-gray-600 p-2 rounded-md'>Add New Book</button>
                </div>
                <div><BooksTable /></div>
            </div>
        </div>
        <div>
            <BookCard />
        </div>
        <div className='bg-white p-6 rounded-md'>
            <div className='flex justify-between items-start mb-3'>
                <h1 className='font-semibold text-2xl'>Overdue Book List</h1>
            </div>
            <div><OverdueBooks /></div>
        </div>
        <div>
            <IssuedBooks />
        </div>
    </main>
  )
}

export default Content