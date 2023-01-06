import MainScreen from "../../components/MainScreen"
import Content from "../../components/Content"
import NavBar from "../../components/NavBar"
import SearchBar from "../../components/Tags/SearchBar"
import Wraper from "../../components/Tags/Wraper"
import SearchContent from "../../components/Tags/SearchContent"
import SearchContentMobile from "../../components/Tags/SearchContentMob"
import { useState } from "react"
import Head from "next/head"

const Tags =()=> {

    const [data, setData] = useState(null)
    const [searchTap, setSearchTap] = useState(null)

    const getData =async()=>{

        if(true){

            var searchReq = await fetch(`https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(tags~'${searchTap}')`)
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
                    <title>Tags : FireBlog</title>
                    <meta name="theme-color" content="#111827"/>
                    <link rel="icon" href="/icons/Fire.svg" />
                </Head>
                <NavBar select="Tags"
                        searchAccess={true}
                        setSearchTap={setSearchTapx} 
                        searchTap={searchTap}
                        mod="tags"
                        />
                <Content>
                    <SearchBar setSearchTap={setSearchTapx} searchTap={searchTap}/>
                    <Wraper data={searchTap}/>
                    <SearchContent Data={data}/>
                    <SearchContentMobile Data={data}/>
                </Content>
            </MainScreen>
    )
}

export default Tags