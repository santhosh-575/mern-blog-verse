const ProductCard = ()=>{
    return(
        <div className="border-2 border-black w-[300px] flex flex-col items-center gap-5 py-10 rounded-4xl bg-blue-100 ">
            <img src="vite.svg" alt="Nothing to display" className = "w-[150px] h-[120px] border-2 border-dashed bg-blue-50  border-red-300 rounded-b-full"/>
            <h2 className="font-bold text-4xl text-blue-700">Product 1</h2>
            <p className=" text-2xl text-center px-10">This is a sample Product of DevAstra </p>
            <p className=" text-2xl text-amber-500">$29.99</p>
            <button className="text-white font-bold border-1 w-[150px] cursor-pointer hover:bg-blue-800  bg-blue-600 py-3 rounded-2xl" >add to cart </button>
     



        </div>

    )

}
export default ProductCard