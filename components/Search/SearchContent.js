const Loading =()=>{

    return(
        
            <div class="flex flex-col w-full sm:w-4/5 mr-2 ml-2 mt-2 gap-5 p-2 mx-auto bg-gray-900 shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
                <div class="bg-gray-700 h-52 sm:h-full sm:w-80 rounded-xl animate-pulse m-1 sm:m-0">
                </div>
                <div class="flex flex-col flex-1 gap-5 sm:p-2">
                    <div class="flex flex-col flex-1 gap-3">
                        <div class="w-full m-1 bg-gray-700 animate-pulse h-14 rounded-2xl sm:m-0">
                        </div>
                        <div class="w-full m-1 h-3 bg-gray-700 animate-pulse rounded-2xl sm:m-0">
                        </div>
                        <div class="w-full h-3 m-1 bg-gray-700 animate-pulse rounded-2xl sm:m-0">
                        </div>
                        <div class="w-full h-3 m-1 bg-gray-700 animate-pulse rounded-2xl sm:m-0">
                        </div>
                        <div class="w-full h-3 m-1 bg-gray-700 animate-pulse rounded-2xl sm:m-0">
                        </div>
                    </div>
                    <div class="flex gap-3 mt-auto">
                        <div class="w-20 h-8 m-1 bg-gray-700 rounded-full animate-pulse sm:m-0">
                        </div>
                        <div class="m-1 w-20 h-8 bg-gray-700 rounded-full animate-pulse sm:m-0">
                        </div>
                        <div class="m-1 w-20 h-8 ml-auto bg-gray-700 rounded-full animate-pulse sm:m-0">
                        </div>
                    </div>
                </div>
            </div>

    )
}

const SearchContent =({Data})=>{

    return(
        <div className=" w-full flex flex-col items-center h-max p-2"> 
        
            {
                Data && Data.length !== 0 ? Data.map((value) => {
                    return(
                        <a href={`/post/${value.url}`} className="mb-2 mr-2 ml-2 p-2 flex sm:flex-row flex-col cursor-pointer shadow-lg rounded-lg h-full sm:w-4/5 w-full bg-gray-900 ">
                            <img alt={`${value.image.desc}`} src={`${value.image.link}`} class=" object-cover sm:w-1/3 h-full rounded-lg"/>
                            <div className="sm:w-2/3 w-full h-12/12 p-5 flex flex-col items-left justify-center">
                                <p class="mb-2 text-2xl font-medium f4 text-purple-500">
                                    {value.title}
                                </p>
                                <p class="font-light f3 text-white opacity-50 text-lg">
                                    {value.description}
                                </p>
                                <div class="flex flex-wrap items-center mt-4 justify-starts">
                                    {
                                        value.tags &&  value.tags.match(/\b(\w+)\b/g).map((val) => {
                                            return(
                                                <a href={`/tags/${val}`} class="text-md mr-1 mb-1  py-1 px-4 f1  tag-border text-whiterounded-2xl rounded-full f4 text-purple-500 ">
                                                    {val}
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })

                :<>
                    <Loading /><Loading /><Loading />
                </>
            }
        </div>
    )
}

export default SearchContent
