import NavBar from "./../../components/NavBar"
import MainScreen from "../../components/MainScreen"
import Content from "../../components/Content"
import MyPost  from "../../components/Post/MyPost"
import MainPost from "../../components/Post/MainPost"
import RelatedList from "../../components/Post/RelatedList"
import ContentGenerator from "../../components/Post/ContentGenerator"
import PostHeader from "../../components/Post/PostHeader"
import NotExist from "../../components/NotExist"
import Wraper from "../../components/Post/Wraper"
import RelatedUi from "../../components/Post/RelatedUi"
import Head from "next/head"
import { useState } from "react"

export async function getServerSideProps(context){

    const { id } = context.query

    const postReq = await fetch(`https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(url='${id}')`)
    const post = await postReq.json()

    if(post.totalPages === 1){
        await fetch(`https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records/${post.items[0].id}`, {
                method: 'PATCH',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    views: post.items[0].views + 1
                })
            })
        }

        const relatedReq = await fetch(`https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(tags~'${post.items[0].tags.match(/\b(\w+)\b/g)[0]}')&perPage=5`)
        const result = await relatedReq.json()

    return {
        props: {post: post, relatedFirst:result.items },
    }
}

const Post =({post, relatedFirst})=> {

    const [Data] = useState(post.totalItems === 1? post.items[0] :null)
    const [selected, setSelected] = useState(Data.tags.match(/\b(\w+)\b/g)[0])
    const [related, setRealted] = useState(relatedFirst)

    const getData =async(e)=>{
        var relatedReq = await fetch(`https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(tags~'${e}')&perPage=5`)
        var result = await relatedReq.json()
        setRealted(result.items)
    }

    const selectChange=(e)=>{

        setSelected(e)
        getData(selected)    
    }

    return(
            <MainScreen>
                <Head>
                    <link rel="icon" href="/icons/Fire.svg" />
                    <meta name="theme-color" content="#111827"/>
                    <title>{Data ? Data.title: "FireBlog : 404"}</title>
                </Head>
                <NavBar/>
                <Content>
                    <MyPost>
                        <RelatedList >
                            {Data && Data.tags &&<Wraper selected={selected} setSelected={selectChange} data={Data.tags} />}

                            {
                                related && related.map((val)=>{
                                    return(
                                        <RelatedUi data={val} />
                                    )
                                })
                            }
                        </RelatedList>
                        <MainPost>
                            {
                            post.totalPages === 1 ?
                            <>                      
                                <PostHeader data={Data}/>
                                <ContentGenerator data={Data.content}/>
                            </>
                            : <NotExist val="404 : page not exist"/>
                            }
                        </MainPost>
                    </MyPost>
                </Content>
            </MainScreen>
    )
}


export default Post