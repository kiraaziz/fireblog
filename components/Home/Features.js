const app =({data})=>{

    return(
			<div className="dark:bg-gray-800 dark:text-gray-100">
				<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-purple-500 f1 sm:text-4xl">All the features you want</h2>
					</div>
					<dl className="mt-12 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
						
						<div className="flex bg-gray-900 p-5 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A855f7" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
							</svg>
							<div className="ml-3">
								<dt className="text-lg text-white font-medium f3">{data.feature1.title}</dt>
								<dd className="mt-2 text-gray-400 f2">{data.feature1.content}</dd>
							</div>
						</div>
						<div className="flex bg-gray-900 p-5 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A855f7" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
							</svg>
							<div className="ml-3">
								<dt className="text-lg text-white font-medium f3">{data.feature2.title}</dt>
								<dd className="mt-2 text-gray-400 f2">{data.feature2.content}</dd>
							</div>
						</div>
						<div className="flex bg-gray-900 p-5 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A855f7" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
							</svg>
							<div className="ml-3">
								<dt className="text-lg text-white font-medium f3">{data.feature3.title}</dt>
								<dd className="mt-2 text-gray-400 f2">{data.feature3.content}</dd>
							</div>
						</div>
					</dl>
				</div>
			</div>
    )
}

export default app