import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom'
import { CircleUserRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { UserRound } from 'lucide-react';

const SignUp = () => {
     const [formData,setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
     })
     const handleChange=(event)=>{
        setFormData((formData) => ({
            ...formData,
            [event.target.name]:event.target.value
        }))        
     }
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const handlePassword =()=>{
        setShowPassword((password) => !password)
    }
    const handleConfirmPassword =()=>{
        setShowConfirmPassword((password) => !password)
    }

    return (
        <div>
            <NavBar />
            <div className=" flex flex-col  items-center  gap-6 bg-blue-50">
                <h1 className="text-2xl text-bold text-blue-600 mt-10">JOIN BLOG-VERSE</h1>
                <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
                <form className="flex flex-col border-0 border-gray-400 rounded-3xl shadow-2xl bg-white shadow-gray-400 py-5 items-center w-1/3 gap-5">
                    <div className=" relative w-[90%] items-center">
                        <p className="p-2">FullName</p>
                        <input type="text" placeholder="Enter your FullName" name='fullName' value={formData.fullName} onChange={handleChange} required className="border-1 border-gray-400 rounded-2xl pl-10 w-full p-3" />
                        <UserRound className='absolute text-gray-400 top-13 left-3'/>
                    </div>
                    <div className="w-[90%] items-center ">
                        <p className="p-2">Email</p>
                        <div className='relative'>
                            <input type="email" placeholder="Enter your Email" name='email' onChange={handleChange} value={formData.email} required className="border-1 pl-10 border-gray-400 rounded-2xl  w-full p-3" />
                            <Mail className='absolute  left-3 top-3 text-gray-400' /></div>
                    </div>
                    <div className="w-[90%] items-center">
                        <p className="p-2">Password</p>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} name='password' onChange={handleChange} value={formData.password} required  placeholder="Enter your Password" className="border-1 border-gray-400 rounded-2xl pl-10 w-full p-3" />
                            <LockKeyhole className='absolute left-3 top-3 text-gray-400' /><p onClick={handlePassword}>{showPassword ? <Eye className='absolute  right-3 top-3 text-gray-400'/> : <EyeOff className='absolute  right-3 top-3 text-gray-400'/>}</p></div>
                    </div>
                    <div className="relative w-[90%] items-center">

                        <p className="p-2">Confirm Password</p>
                        <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' onChange={handleChange} value={formData.confirmPassword} required placeholder="Confirm your Password" className="border-1 border-gray-400 rounded-2xl pl-10 w-full p-3" />
                        <LockKeyhole className='absolute left-3 top-13 text-gray-400'/><p onClick={handleConfirmPassword}> {showConfirmPassword ? <Eye className='absolute  right-3 top-13 text-gray-400'/> : <EyeOff className='absolute  right-3 top-13 text-gray-400'/>}</p>
                    </div>

                    <div className="flex gap-2 border-1 items-center pl-25 p-3 border-gray-400 w-[90%]  rounded-2xl">
                        <input type="checkbox" />
                        <p>I agree to the terms of Service and Police Policy </p>
                    </div>

                    <button className="bg-purple-400 font-bold text-white w-[90%] p-3 flex justify-center gap-3 rounded-xl mt-4 "><CircleUserRound />Create Account</button>
                    <div className="border-gray-500 border-[0.5px] w-[90%] mt-5"></div>
                    <p className="text-semibold text-gray-700 mt-5 ">Already have an Account ?  <Link to="/signin" className="text-purple-500 ">Sign In Here</Link></p>
                    <button className="text-semibold mt-5 ">Back to Home </button>

                </form>
            </div>
        </div>
    )
}
export default SignUp
