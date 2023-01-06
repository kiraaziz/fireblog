const SelectedTags =({data})=>{

    return(
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col overflow-hidden rounded-md bg-gray-900 shadow-sm lg:flex-row-reverse">
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold f5 text-white">{data.title}</h3>
                        <div class="flex flex-wrap items-center justify-left pt-3 pb-3">
                                {
                                    data.tags && data.tags.match(/\b(\w+)\b/g).map((val) => {
                                        return(
                                            <a href={`/tags/${val}`} class="text-sm sm:text-xl m-0.5 py-1.5 px-3  f3 bg-purple-500 text-white ">
                                                #{val}
                                            </a>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectedTags