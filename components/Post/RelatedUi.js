const Random =({data})=>{

    return(        
            <div class=" overflow-hidden rounded-lg shadow-lg  cursor-pointer h-90 w-12/12 m-2">
                <a href={data.url} class="block w-full h-full">
                    <img alt="blog photo" src={data.image.link} class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-gray-800">
                        <p class="mb-2 text-xl font-medium f5 text-purple-500">
                            {data.title}
                        </p>
                        <p class="f3 text-white opacity-80 text-md">
                            {data.description}
                        </p>
                        <div class="flex flex-wrap items-center mt-4 justify-starts">
                            {
                                [data.tags].map((val) => {
                                    return(
                                        <a href={`/tags/${val}`} class="text-sm m-0.5 py-1 px-4 f3 tag-border text-whiterounded-2xl rounded-full text-purple-500 ">
                                            {val}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default Random
