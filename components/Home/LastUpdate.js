import dateFormat from "dateformat";

const LastUpdate =({data, text})=>{

    return(
<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-3 mx-auto space-y-6 sm:space-y-12 ">
		<h1 className="text-2xl p-3 m-0 text-white f5 bg-purple-500">{text}</h1>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				data && data.map((val) => {
				return(
					val && <a rel="noopener noreferrer" href={`/post/${val.url}`} className="max-w-sm  group hover:no-underline focus:no-underline bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" alt={val.image.desc} src={val.image.link} />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-white f1">{val.title}</h3>
							<span className="f2 text-xs text-purple-500">{dateFormat(val.created, "fullDate")}</span>
							<p className="f2 text-gray-400">{val.description}</p>
						</div>
					</a>
					)
				})
			}
		</div>

	</div>
</section>
    )
}

export default LastUpdate