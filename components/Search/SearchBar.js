const SearchBar =({searchTap, setSearchTap})=> {

    return(
        <div className="w-full items-center justify-center sm:flex hidden flex-row pb-6 pt-6">
            <div className="sm:flex hidden bg-search w-5/6 items-center justify-evenly flex-row">
                <input onChange={(e)=>{setSearchTap(e.target.value)}} className="w-4/5 rounded-md f4 bg-gray-900 h-14 p-2 text-xl text-white search-border" value={searchTap} placeholder="Search for something ...."/>                                
                <a href={`/search/${searchTap}`} className="block w-1/6 items-center text-xl justify-center f4 flex rounded-md bg-purple-500 search-btn-border h-14 text-white search-border" placeholder="Search for something ....">Search</a>                
            </div>
        </div>
    )
}

export default SearchBar