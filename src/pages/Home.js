
import Footer from '../Footer';
import HomeArticles from '../HomeArticles';
import MainNavbar from '../MainNavbar';
import Showcase from '../Showcase';
// import useSWR from 'swr'

export default function Home() {


    return(
        <div id="home">
            <Showcase/>
            <HomeArticles/>
            <Footer/>
        </div>

    )
}