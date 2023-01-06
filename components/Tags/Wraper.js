const Wraper =({data})=>{

    return(
        <div class="flex flex-wrap items-center justify-center pt-3 pb-1 pr-20 pl-20">
                {
                    data && data.match(/\b(\w+)\b/g).map((val) => {
                        return(
                            <div class="text-sm sm:text-xl m-0.5 py-1.5 px-3  f3 bg-purple-500 text-whiterounded-2xl rounded-full text-white ">
                                {val}
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Wraper