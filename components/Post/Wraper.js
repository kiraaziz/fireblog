const Wraper = ({data, setSelected, selected})=>{

    return(
        <div class="flex w-full h-max overflow-y-auto p-1 bg-gray-900">
                {
                    data && [data].map((val) => {
                        return(
                            <div onClick={()=>{setSelected(val)}} class={`${selected === val? "bg-purple-500 select-border ": "bg-gray-800"} flex items-center justify-center text-sm sm:text-xl m-0.5 py-1.5 px-3  f3  rounded-xl text-white`}>
                                {val}
                            </div>
                        )
                    })
                }
        </div>
    )

}

export default Wraper
