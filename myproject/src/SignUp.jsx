const SignUp = () => {
    return (
        <div className=" flex flex-col  items-center mt-10 gap-6">
            <h1 className="text-2xl text-bold text-blue-600 ">JOIN BLOG-VERSE</h1>
            <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
            <form className="flex flex-col border-2 py-5 items-center w-1/3 gap-5">
                <div className="w-[90%] items-center">
                    <p className="p-2">FullName</p>
                    <input type="text" placeholder="Enter your FullName" className="border-1 border-gray-400 rounded-2xl pl-2 w-full p-3" />

                </div>
                <div className="w-[90%] items-center">
                    <p className="p-2">Email</p>
                    <input type="email" placeholder="Enter your Email" className="border-1 border-gray-400 rounded-2xl pl-2 w-full p-3" />

                </div>
                <div className="w-[90%] items-center">
                    <p className="p-2">Password</p>
                    <input type="Password" placeholder="Enter your Password" className="border-1 border-gray-400 rounded-2xl pl-2 w-full p-3" />

                </div>
                <div className="w-[90%] items-center">
                    <p className="p-2">Confirm Password</p>
                    <input type="Password" placeholder="Confirm your Password" className="border-1 border-gray-400 rounded-2xl pl-2 w-full p-3" />

                </div>

                <div className="flex gap-2 border-1 items-center pl-25 p-3 border-gray-400 w-[90%]  rounded-2xl">
                    <input type="checkbox" />
                    <p>I agree to the terms of Service and Police Policy </p>
                </div>
                
                    <button className="bg-purple-400 font-bold text-white w-[90%] p-3 rounded-xl mt-4 ">Create Account</button>
                    <div className="border-gray-500 border-[0.5px] w-[90%] mt-5"></div>
                    <p className="text-semibold text-gray-700 mt-5 ">Already have an Account ?  <span className="text-purple-500 ">Sign In Here</span></p>
                    <button className="text-semibold mt-5 ">Back to Home </button>
                
            </form>
        </div>

    )
}
export default SignUp
