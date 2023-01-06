const app =({data, topViewShow})=>{

    return(<div className="dark:bg-gray-800 dark:text-gray-50 m-3">
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto" style={{backgroundImage: `url(${topViewShow.image})`, backgroundPosition: "center", backgroundBlendMode: "multiply", backgroundSize: "cover"}}>
			<div className="flex flex-col items-center p-8 py-12 text-center">
				<h1 className="py-4 text-2xl font-bold f1 text-white bg-gray-900 p-3">{topViewShow.text}</h1>
			</div>
		</div>
		<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
			{
				data.map((val)=>{

					return(
							<div className="pt-6 pb-4 space-y-2">
								<span className="f2 text-purple-500">{val.date}</span>
								<h1 className="text-3xl font-bold f1 text-white">{val.title}</h1>
								<p className="text-gray-300 f2 ">{val.views} View </p>
								<a rel="noopener noreferrer" href={`/post/${val.url}`} className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
									<span className="f2 text-purple-500">Read more</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#A855f7" className="w-4 h-4">
										<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</a>
							</div>
					)
				})
			}
		</div>
	</div>
</div>)
}

export default app