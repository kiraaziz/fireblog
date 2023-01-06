import { useState } from "react"
import MainScreen from "../../components/MainScreen"
import NavBar from "../../components/NavBar"
import Content from "../../components/Content"
import SearchBar from "../../components/Search/SearchBar"
import SearchContent from "../../components/Search/SearchContent"
import Head from "next/head"

export async function getServerSideProps(context){

    const { id } = context.query

    const searchReq = await fetch(`hhttps://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(title~'${id}' || description~'${id}')`)
    const data = await searchReq.json()

    return {
        props: {afterData: data, tap: id},
    }
}

const Search =({afterData, tap})=> {

    const [data, setData] = useState(afterData)
    const [searchTap, setSearchTap] = useState(tap)

    const getData =async()=>{

        if(true){

            var searchReq = await fetch(`hhttps://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(title~'${searchTap}' || description~'${searchTap}')`)
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