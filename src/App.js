
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './MainNavbar';
import About from './pages/About';
import AllArticles from './pages/AllArticles';
import Article from './pages/Article';
// import Article from './pages/Article';
import Home from './pages/Home';



// import Footer from './Footer';
// import HomeArticles from './HomeArticles';
// import MainNavbar from './MainNavbar';
// import Showcase from './Showcase';

function App() {
  return (
    <> 
      <MainNavbar/>
      <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/article" element={<Article/>}/>
          {/* <Route path="/article.html" element={<Article/>}/> */}
          <Route path="/allArticles" element={<AllArticles/>}/>
      </Routes>
    </>
    
  );
}

export default App;

{/* <div className="App">
       
       <header className="App-header">
         <Home/>
       </header>
     </div> */}