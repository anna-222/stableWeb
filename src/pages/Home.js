import Footer from "../components/Footer";
import HomeArticles from "../components/HomeArticles";

import Showcase from "../components/Showcase";
// import useSWR from 'swr'
import "../home.css";
import MainNavbarTW from "../components/MainNavbarTW";

export default function Home() {
  return (
    <div id="home">
      <MainNavbarTW />
      <Showcase />
      <HomeArticles />
      <Footer />
    </div>
  );
}
