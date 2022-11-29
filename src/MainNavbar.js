import "./mainNavbar.css"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Link, NavLink } from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';


export default function MainNavbar(){

    return(
        <nav id="main-nav">
            <div className="container">
            <Link to='/'><img src="image/logo-kon.png"  alt="stable-web" className="logo"/></Link>
                
                <div className="social">
                    <a href="http://facebook.com" target="_blank"><i className="fa fa-facebook fa-2x socialMedia"></i></a>
                    <a href="http://twitter.com" target="_blank"><i className="fa fa-twitter fa-2x socialMedia"></i></a>
                    <a href="http://instagram.com" target="_blank"><i className="fa fa-instagram fa-2x socialMedia"></i></a>
                    <a href="http://youtube.com" target="_blank"><i className="fa fa-youtube fa-2x socialMedia"></i></a>
                </div>
                <ul>
                    <li><NavLink end to="/">Home</NavLink></li>
                    <li><NavLink to="/about" >About</NavLink></li>
                    <li><NavLink to="/allArticles" >Articles</NavLink></li>
                </ul>
            </div>
        </nav>
  
    )
}