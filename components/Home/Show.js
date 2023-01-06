const Show =({data, links})=>{

    return(
		<div className="sm:h-full h-max w-screen bg-ll flex items-center justify-center flex-col sm:flex-row home-bg">
			<div className="h-screen sm:w-2/5 w-screen p-10 flex items-center justify-center flex-col ">
                
                <h1 className="f5 text-purple-500 bg-gray-900 text-2xl p-2 text-center">{data.title}</h1>
                <div className="w-full h-5"></div>
                <h2 className="f3 text-xl text-white text-center">{data.description}</h2>
                <div className="w-full h-5"></div>
                <div className="h-20 m-3 w-full flex items-center justify-center flex-row">
                    
                    {links.facebook && 
                        <a href={links.facebook} className=" w-20 h-20 m-2 p-5 bg-purple-500 flex items-center justify-center">
                            <img src="/icons/my-facebook.svg" className="h-full w-full" />
                        </a>
                    }
                    {links.instagram && 
                        <a href={links.instagram} className=" w-20 h-20 m-2 p-5 bg-purple-500 flex items-center justify-center">
                            <img src="/icons/my-instagram.svg" className="h-full w-full" />
                        </a>
                    }
                    {links.github && 
                        <a href={links.github} className=" w-20 h-20 m-2 p-5 bg-purple-500 flex items-center justify-center">
                            <img src="/icons/my-github.svg" className="h-full w-full" />
                        </a>
                    }
                </div>
            </div>
			<div className="flex sm:h-screen sm:w-3/5 h-max  w-screen sm:flex items-center justify-center flex-col m-2">
				<img src={data.image1.link} alt={data.image1.alt} className="hidden sm:block object-cover h-20 sm:h-1/5 m-2 rounded-lg w-11/12 sm:w-2/3 shadow-lg" />
				<img src={data.image2.link} alt={data.image2.alt} className="hidden sm:block object-cover h-20 sm:h-1/5 m-2 sm:mr-20 rounded-lg w-11/12 sm:w-2/3 shadow-lg" />
				<img src={data.image3.link} alt={data.image3.alt} className="hidden sm:block object-cover h-60 sm:h-1/5 sm:m-2 sm:ml-20 rounded-lg w-11/12 sm:w-2/3 shadow-lg" />
			</div>
		</div>
    )
}

export default Show