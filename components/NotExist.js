const Error =({val})=> {
    
    return(
    
        <div className="sm:w-3/4 w-screen overflow-y-auto bg-gray-800 overflow-x-hidden flex items-center justify-center h-full">
            <h1 className="f5 text-white bg-purple-500 text-2xl p-3 ">{val}</h1>
        </div>
    )
}

export default Error