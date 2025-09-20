import React from "react";
import { Link } from 'react-router-dom'
const NavBar =() => {
    return (
        <div className ="flex justify-around items-center h-16 border-1 border-r-gray-400 ">
            <h1 className =" font-bold"> BlogVerse </h1>
            <Link to="/home" className="border-0 font-semibold bg-blue-300 rounded-2xl cursor-pointer p-2"> Home </Link>
            <div className="flex gap-3 ">
                <Link to="/signin" className="font-semibold p-3 cursor-pointer" >Sign In</Link>
                <Link to="/signup" className="border-0 text-white bg-blue-500 cursor-pointer p-2 rounded-4xl hover:bg-blue-900">Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar;