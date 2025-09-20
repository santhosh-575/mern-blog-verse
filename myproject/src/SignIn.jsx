import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <>
          <div className ="flex justify-around items-center h-16 border-1 border-r-gray-400 ">
            <h1 className =" font-bold"> BlogVerse </h1>
            <Link to="/home" className="border-0 font-semibold bg-blue-300 rounded-2xl cursor-pointer p-2"> Home </Link>
            <div className="flex gap-3 ">
                <Link to ="/singin" className="font-semibold cursor-pointer" >Sign In</Link>
                <Link to="/signup" className="border-0 text-white bg-blue-500 cursor-pointer p-2 rounded-4xl hover:bg-blue-900">Sign Up</Link>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen bg-blue-50 border-0 ">
            <div className="h-140 w-110 rounded-3xl flex items-center justify-center flex-col shadow-2xl  bg-white shadow-gray-400 ">
                <p className="text-3xl font-bold pt-10">Sign In</p><br />
                <p className="font-semibold">Access your account</p>
                <div className="m-10  ">
                    <form className="">
                        <p className="p-1">Email Address</p>
                        <input type="text" placeholder="Sample@gmail.com" className="border-1 p-3 rounded-xl w-90" />
                        <p className="p-1 pt-5">Password</p>
                        <input type="password" placeholder="Sample123" className="border-1 p-3 rounded-xl w-90" />&nbsp;
                        <div className="flex ">
                            <p><input type="checkbox" className=" m-3" />Remember me? </p>
                            <p className="text-blue-700  font-semibold m-2 pl-18">forget password</p>
                        </div>
                        <div className="gap-0.5"></div>
                        <button className="border-1 rounded-xl w-90 h-13 bg-blue-700 font-bold hover:bg-blue-900   text-white">Sign In</button>
                        <div className="border-1 w-90 mt-4 border-gray-500"></div>

                        <div className="flex">
                            <p className="text-gray-500 pl-1 pt-4">Don't have an account? </p>
                            <p className="text-blue-700 pl-2 pt-4 font-semibold">Create one here </p>

                        </div>
                    </form>
                </div>

            </div>
        </div>

      </>




    )
}
export default SignIn