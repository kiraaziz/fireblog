import MainScreen from "../components/MainScreen"
import NavBar from "../components/NavBar"
import Content from "../components/Content"
import ContactArea from "../components/Contact/Area"
import Head from "next/head"


export async function getServerSideProps(){

    const textReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogMessageUi/records/7l5ugb9zlnwzvsm")
    const text = await textReq.json()

    return {
        props: {show: text},
    }
}

const Contact =({show})=>{

    return(
        <MainScreen>
            <Head>
                <title>Contact : FireBlog</title>
                <meta name="theme-color" content="#111827"/>
                <link rel="icon" href="/icons/Fire.svg" />
            </Head>
            <NavBar select="Contact" />
            <Content>
                <ContactArea show={show}/>
            </Content>
        </MainScreen>
    )
}

export default Contact