const app =({data})=>{

    return(
			<footer className="bg-gray-900 ">
				<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
					<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
						<li>
							<a class="flex items-center justify-center" href="/">
                                <img class="w-8 h-8" src="/icons/Fire.svg"/>
                                <p className="f5 text-xl mr-3 ml-3 text-purple-500 ">Fire Blog</p>
                            </a>
						</li>
						<li>
							<a href="/search" className="f3 text-gray-500 text-lg">Search</a>
						</li>
						<li>
							<a href="/tags"className="f3 text-gray-500 text-lg">Tags</a>
						</li>
						<li>
							<a href="/contact" className="f3 text-gray-500 text-lg">Contact</a>
						</li>
					</ul>
					<div className="flex flex-col justify-center pt-6 lg:pt-0">
						<div className="flex justify-center space-x-4">
							{
								data.facebook && 
								<a rel="noopener noreferrer" href={data.facebook} title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-purple-500 p-2">
                            		<img src="/icons/my-facebook.svg" className="h-full w-full" />
								</a>
							}
							{
								data.instagram && 
								<a rel="noopener noreferrer" href={data.instagram} title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-purple-500 p-2">
                            		<img src="/icons/my-instagram.svg" className="h-full w-full" />
								</a>
							}
							{
								data.github && 
								<a rel="noopener noreferrer" href={data.github} title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-purple-500 p-2">
                            		<img src="/icons/my-github.svg" className="h-full w-full" />
								</a>
							}
						</div>
					</div>
				</div>
			</footer>
	)
}

export default app