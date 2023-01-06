import NavBar from "./../components/NavBar"
import MainScreen from "../components/MainScreen"
import Content from "../components/Content"
import MyPost  from "../components/Post/MyPost"
import MainPost from "../components/Post/MainPost"
import RelatedList from "../components/Post/RelatedList"
import NotExist from "../components/NotExist"
import Head from "next/head"

const Error=()=>{

    return(
            <MainScreen>
                <Head>
                    <meta name="theme-color" content="#111827"/>
                    <link rel="icon" href="/icons/Fire.svg" />
                    <title>FireBlog : 404</title>
                </Head>
                <NavBar/>
                <Content>
                    <MyPost>
                        <RelatedList >

                        </RelatedList>
                        <MainPost>
                            <NotExist val="404 : page not exist"/>
                        </MainPost>
                    </MyPost>
                </Content>
            </MainScreen>
    )
}


export default Error