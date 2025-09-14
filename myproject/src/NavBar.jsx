import React from "react";

const NavBar =() => {
    return (
        <div className ="flex justify-around items-center h-16 border-1 border-r-gray-400 ">
            <h1 className =" font-bold"> BlogVerse </h1>
            <buton className="border-0 font-semibold bg-blue-300 rounded-2xl cursor-pointer p-2"> Home </buton>
            <div className="flex gap-3 ">
                <button className="font-semibold cursor-pointer">Sign In</button>
                <button className="border-0 text-white bg-blue-500 cursor-pointer p-2 rounded-4xl hover:bg-blue-900">Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar;