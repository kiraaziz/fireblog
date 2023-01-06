import { useState } from "react"
import MainScreen from "../../components/MainScreen"
import NavBar from "../../components/NavBar"
import Content from "../../components/Content"
import SearchBar from "../../components/Search/SearchBar"
import SearchContent from "../../components/Search/SearchContent"
import Head from "next/head"


const Search =()=> {

    const [data, setData] = useState(null)
    const [searchTap, setSearchTap] = useState(null)

    const getData =async()=>{

        if(true){

            var searchReq = await fetch(`https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(title~'${searchTap}' || description~'${searchTap}')`)
            setData(await searchReq.json())
        }

    }

    const setSearchTapx =(e)=>{
        setSearchTap(e)
        getData()
    }

    return(
        <MainScreen>
            <Head>
                <title>Search : FireBlog</title>
                <meta name="theme-color" content="#111827"/>
                <link rel="icon" href="/icons/Fire.svg" />
            </Head>
            <NavBar select="Search"
                    setSearchTap={setSearchTapx} 
                    searchTap={searchTap}
                    searchAccess={true}
                    mod="search" />
            <Content>
                <SearchBar 
                    setSearchTap={setSearchTapx} 
                    searchTap={searchTap}/>
                <SearchContent Data={data && data.items}/>
            </Content>
        </MainScreen>
    )
}

export default Search