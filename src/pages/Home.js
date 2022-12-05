import Footer from "../components/Footer";
import HomeArticles from "../components/HomeArticles";
import MainNavbar from "../components/MainNavbar";
import Showcase from "../components/Showcase";
// import useSWR from 'swr'

export default function Home() {
  return (
    <div id="home">
      <MainNavbar />
      <Showcase />
      <HomeArticles />
      <Footer />
    </div>
  );
}
