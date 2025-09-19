const SignupTag = () =>{
    return(
        
        <div className ="flex justify-evenly border-0 rounded p-1 border-b-gray-100 bg-white shadow-2xl">
            <p className ="font-bold text-xl pt-5">Blogverse</p>
            <button className="border-0 m-4 p-2 font-semibold rounded cursor-pointer  hover:bg-gray-200" >Home</button>
            <div className="">
                <button className="font-semibold cursor-pointer">Sign In</button>&nbsp;&nbsp;
                <button className="border-0 text-white cursor-pointer bg-blue-600 rounded p-2 m-4">Sign Up</button>
            </div>
        </div>
        
    )
}
export default SignupTag 