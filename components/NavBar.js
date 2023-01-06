import { useState } from "react"

const NavBar =({select, searchTap, setSearchTap, searchAccess, mod})=> {

    const [route] = useState([
        {name: "Home", route: "/"},
        {name: "Tags", route: "/tags"},
        {name: "Search", route: "/search"},
        {name: "Contact", route: "/contact"}
    ])

    const [open, setOpen] = useState(false)
    const [focus, setFocus] = useState(false)

    return(
                <nav class="bg-gray-900 shadow p-1">
                    <div class="px-5 mx-auto max-w-7xl">
                        <div class="flex items-center justify-between h-16">
                            <div class="w-full justify-between flex items-center">
                                <a class="flex-shrink-0 flex items-center justify-center" href="/">
                                    <img class="w-8 h-8" src="/icons/Fire.svg" alt="Workflow"/>
                                    {!focus && <h1 className="f5 text-lg text-purple-500  p-3">Fire Blog</h1>}
                                </a>
                                {searchAccess && <form action={`/${mod}/${searchTap}`}><input onBlur={()=>{setFocus(false)}} onFocus={()=>{setFocus(true)}} onChange={(e)=>{setSearchTap(e.target.value)}} value={searchTap} className="focus:w-full w-full focus:opacity-95 p-2 rounded-md f4 bg-gray-900 opacity-90 mr-2 ml-2 block sm:hidden text-white search-border" placeholder="Search for something ...."/></form>}

                                <div class="hidden md:block">
                                    <div class="flex items-baseline ml-10 space-x-4">
                                        {
                                            route.map((val) => {
                                                return(
                                                    <a class={`${select === val.name ? "text-purple-500 navSelect f4": "f4 opacity-95  text-white "}  hover:text-purple-500 navHover  px-3 py-2 rounded-md text-sm font-medium`} href={val.route}>
                                                        {val.name}
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="block">
                                <div class="flex items-center ml-4 md:ml-6">
                                </div>
                            </div>
                            {!focus &&<div class="flex -mr-2 md:hidden">
                                <button onClick={()=>{setOpen(!open)}} class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <img class="w-8 h-8" src="/icons/Menu.svg" alt="Workflow"/>
                                </button>
                            </div>}
                        </div>
                    </div>
                    {open &&
                        <div class="md:hidden">
                            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {
                                    route.map((val) => {
                                        return(
                                            <a class={`${select === val.name ? "navSelect text-purple-500": "text-white"}  hover:text-purple-500 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium f2`} href={val.route}>
                                                {val.name}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </nav>
    )
}

export default NavBar