import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import AllArticles from "./pages/AllArticles";
import Article from "./pages/Article";
// import Article from './pages/Article';
import Home from "./pages/Home";

// import Footer from './Footer';
// import HomeArticles from './HomeArticles';
// import MainNavbar from './MainNavbar';
// import Showcase from './Showcase';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/article" element={<Article />} />
        <Route path="/article/:id" element={<Article />} />
        <Route exact path="/allArticles" element={<AllArticles />} />
      </Routes>
    </>
  );
}

export default App;
