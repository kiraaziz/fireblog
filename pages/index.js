import MainScreen from "./../components/MainScreen"
import Content from "./../components/Content"
import NavBar from "./../components/NavBar"
import Show from "../components/Home/Show"
import Head from "next/head"
import Foot from "../components/Home/Foot"
import SelectedTags from "../components/Home/SelectedTags"
import LastUpdate from "../components/Home/LastUpdate"
import Features from "../components/Home/Features"
import TopView from "../components/Home/TopView"

export async function getServerSideProps(){

    const showReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogShow/records/ijlrt6oj2tix78t")
    const show = await showReq.json()

    const linksReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogLinks/records/dgqskegcxu7p4ph")
    const links = await linksReq.json()

    const featuresReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogFeatures/records/f83megyykfi46k7")
    const features = await featuresReq.json()

    const tagsReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogTags/records/pdtcngsuhk1ch35")
    const tags = await tagsReq.json()

    const topViewReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?sort=-views&perPage=3")
    const topView = await topViewReq.json()

    const lastUpdateReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?sort=-created&perPage=15")
    const lastUpdate = await lastUpdateReq.json()

    const lastUpdateTextReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogSelectedText/records/dly8dzirjlbbu95")
    const lastUpdateText = await lastUpdateTextReq.json()

    const topViewShowReq = await fetch("https://stale-camera.pockethost.io/api/collections/fireBlogTopView/records/tfz2r2s09atiznv")
    const topViewShow = await topViewShowReq.json()

    return {
        props: {show: show, tags: tags, links: links, features: features, tags: tags, topView : topView.items, topViewShow: topViewShow, lastUpdate: lastUpdate, lastUpdateText: lastUpdateText.text},
    }
}

const Home =({show, tags,  links, features, topView, topViewShow, lastUpdate, lastUpdateText})=>{

    return(
        <MainScreen>
            <Head>
                <title>FireBlog</title>
                <meta name="theme-color" content="#111827"/>
                <link rel="icon" href="/icons/Fire.svg" />
            </Head>
            <NavBar select="Home"/>
            <Content>
                <Show data={show} links={links}/>
                <Features data={features}/>
                <TopView data={topView} topViewShow={topViewShow}/>
                <SelectedTags data={tags} />
                <LastUpdate data={lastUpdate.items} text={lastUpdateText}/>
                <Foot data={links}/>
            </Content>
        </MainScreen>
    )
}

export default Home