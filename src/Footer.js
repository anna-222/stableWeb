
import "./footer.css"
export default function Footer() {

    return(
        <footer id="main-footer">
            <div className="container footer-container">
                <div className="imageDiv">
                    <img src="image/logo-kon.png" alt=""/>
                    
                </div>
                <div>
                    <h3>Email Newsletter</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <form>
                        <input type="email" placeholder="Enter email"/>
                        <input type="submit" value="Subscribe" className="btn bg-primary"/>
                    </form>
                </div>
                <div>
                    <h3>Site links</h3>
                    <ul className="list">
                        <li><a href="#">Help & Suppoer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Join our club</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa totam consequuntur quas eligendi. Impedit, quidem.
                    </p>
                    <a href="#" className="btn bg-secondary">Join Now</a>
                </div>
                <div>
                    <p>Copyright &copy; 2022, All Rights Reserved</p>
                </div>
            </div>
    </footer>
    )
}