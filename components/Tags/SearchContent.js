import Masonry from "react-masonry-css"

const Loading =()=>{

    return(
        
            <div class="flex flex-col w-full  mr-2 ml-2 mt-2 gap-5 p-2 mx-auto bg-gray-900 shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
                <div class="bg-gray-700 h-52 sm:h-full sm:w-80 rounded-xl animate-pulse">
                </div>
                <div class="flex flex-col flex-1 gap-5 sm:p-2">
                    <div class="flex flex-col flex-1 gap-3">
                        <div class="w-full bg-gray-700 animate-pulse h-14 rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-700 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-700 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-700 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-700 animate-pulse rounded-2xl">
                        </div>
                    </div>
                    <div class="flex gap-3 mt-auto">
                        <div class="w-20 h-8 bg-gray-700 rounded-full animate-pulse">
                        </div>
                        <div class="w-20 h-8 bg-gray-700 rounded-full animate-pulse">
                        </div>
                        <div class="w-20 h-8 ml-auto bg-gray-700 rounded-full animate-pulse">
                        </div>
                    </div>
                </div>
            </div>

    )
}

const SearchContent =({Data})=>{

    return(
        <div className="w-12/12 hidden sm:flex flex-col  items-center">
        <Masonry
        breakpointCols={Data && Data.items.length !== 0 ? 3: 1}
        className="my-masonry-grid w-4/5"
        columnClassName="my-masonry-grid_column"
    >
        
            {
                Data && Data.items.length !== 0 ? Data.items.map((value) => {
                    return(
                        <a href={`/post/${value.url}`} className="flex flex-col cursor-pointer shadow-lg mr-1 ml-1 mt-2 mb-2  rounded-lg h-max bg-gray-900 ">
                            <img alt={`${value.image.desc}`}  src={`${value.image.link}`} class=" object-cover w-12/12 h-60 m-2 rounded-lg"/>
                            <div className="w-full h-12/12 p-5 flex flex-col items-left justify-center">
                                <p class="mb-2 text-xl font-medium f5 text-2xl text-purple-500">
                                    {value.title}
                                </p>
                                <p class="font-light f4 text-lg text-white opacity-50 text-md">
                                    {value.description}
                                </p>
                                <div class="flex flex-wrap items-center mt-4 justify-starts">
                                    {
                                        value.tags &&  value.tags.match(/\b(\w+)\b/g).map((val) => {
                                            return(
                                                <a href={`/tags/${val}`} class="text-md mr-1 mb-1  py-1 px-4 f1 tag-border text-whiterounded-2xl rounded-full f3 text-purple-500 ">
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
        </Masonry>
        </div>
    )
}

export default SearchContent