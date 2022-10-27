import "./mainNavbar.css"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Link, NavLink } from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';


export default function MainNavbar(){

    return(
        <nav id="main-nav">
            <div className="container">
                <img src="image/logo.png" alt="info-web" className="logo"/>
                <div className="social">
                    <a href="http://facebook.com" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
                    <a href="http://twitter.com" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                    <a href="http://instagram.com" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
                    <a href="http://youtube.com" target="_blank"><i className="fa fa-youtube fa-2x"></i></a>
                </div>
                <ul>
                    <li><NavLink end to="/">Home</NavLink></li>
                    <li><NavLink to="/about" >About</NavLink></li>
                    <li><NavLink to="/allArticles" >Articles</NavLink></li>

                    {/* <li><a className="current" href="index.html">Home</a></li>
                    <li><a  href="about.html">About</a></li> */}
                </ul>
            </div>
        </nav>
  
    )
}