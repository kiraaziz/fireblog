const SearchBar =({searchTap, setSearchTap})=> {

    return(
        <div className="w-full items-center justify-center sm:flex hidden flex-row pb-6 pt-6">
            <div className="sm:flex hidden bg-search w-5/6 items-center justify-evenly flex-row">
                <input onChange={(e)=>{setSearchTap(e.target.value)}} className="w-4/5 rounded-md f4 text-xl bg-gray-900 h-14 p-3 text-white search-border" value={searchTap} placeholder="Search for something ...."/>                                
            </div>
        </div>
    )
}

export default SearchBar