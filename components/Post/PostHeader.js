import dateFormat from "dateformat"

const PostHeader =({data})=>{
    return(
        
            <section class="flex flex-col justify-center antialiased bg-gary-800 sm:bg-gray-800 text-gray-200 h-max sm:min-h-screen">
                <div class="max-w-6xl mx-auto pt-4 pl-4 pr-4 sm:px-6 h-full">

                    <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <a class="relative hidden sm:block group" href="#0">
                            <div class="absolute inset-0 bg-gray-900 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={data.image.link} alt={data.image.desc} width="540" height="303"/>
                            </figure>
                        </a>
                        <div>
                            <header>
                                <h1 class="block text-white f1 text-xl leading-tight mb-5">
                                    <a class="hover:text-gray-100 f5 text-2xl transition duration-150 ease-in-out">{data.title} </a>
                                </h1>
                                <div class="mb-3">
                                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                                        {
                                            data.tags && data.tags.match(/\b(\w+)\b/g).map((val) => {
                                                return(
                                                    <li class="m-1">
                                                        <a href={`/tags/${val}`} class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-500 hover:bg-purple-700 transition text-sm duration-150 ease-in-out">{val}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </header>
                            <p class="mt-3 sm:block hidden mb-2 text-xl text-wheit pt-2 pb-2  f2  flex-grow">{data.description}</p>
                            <footer class="flex items-center mt-4">

                                <div>
                                    <span class="text-white sm:bloc hidden opacity-80 pt-3 sm:p-3 f2">{dateFormat(data.updated, "fullDate")}</span>
                                </div>
                            </footer>
                            <p className="p-2 mr-3 pl-3 f2 bg-gray-900 rounded-full hidden sm:block text-white text-md w-max mt-5">{data.views} views</p>
                        </div>
                        <a class="relative sm:hidden block group" href="#0">
                           <div class="absolute inset-0 bg-gray-900 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={data.image.link} alt={data.image.desc} width="540" height="303"/>
                            </figure>
                            <p class="mt-3 sm:hidden block mb-2 text-xl text-wheit pt-2 pb-2  f2  flex-grow">{data.description}</p>
                        </a>
                    </article>    
                </div>
            </section>

    )
}

export default PostHeader