import React from "react";
import { Link } from 'react-router-dom'
import { House } from 'lucide-react';
const NavBar =() => {
    return (
        <div className ="flex justify-around items-center h-16 border-1 border-r-gray-400 sticky">
            <h1 className =" font-bold"> BlogVerse </h1>
            <div className='relative'>
                <House className='absolute right-15'/>
                <Link to="/home" className="border-0 font-semibold hover:bg-gray-300 rounded-2xl cursor-pointer p-2"> Home </Link></div>
            <div className="flex gap-3 ">
                <Link to="/signin" className="font-semibold p-3 cursor-pointer" >Sign In</Link>
                <Link to="/signup" className="border-0 text-white bg-blue-500 cursor-pointer p-2 rounded-4xl hover:bg-blue-900">Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar;