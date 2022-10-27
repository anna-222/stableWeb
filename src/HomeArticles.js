import { Link } from "react-router-dom"
import "../src/homeArticles.css"
export default function HomeArticles() {
    return(
        <section id="home-articles" className="py-2">
            <div className="container">
                <h2>Edytor Picks</h2>
                <div className="articles-container">
                    {/* <!-- grid container/item --> */}
                    <article className="card">
                        <img src="image/Articles/magnetoterapia.jpeg" alt=""/>
                        <div>
                            <div className="category category-health">Health</div>
                            <h3>
                                <Link to="/article">Magnetotherapy in horses</Link>
                                {/* <a href="">Magnetotherapy in horses</a> */}
                                
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?</p>
                        </div>
                    </article>
                    <article className="card bg-dark">
                            <div className="category category-nutrion">Nutrion</div>
                            <h3>
                                <a href="article.html"> Horse nutrion- hay </a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?</p>
                    </article>
                    <article className="card">
                        <img src="image/Articles/sprzęt.jpeg" alt=""/>
                            <div className="category category-equipment">Equipment</div>
                            <h3>
                                <a href="article.html">Saddle</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?</p>
                    </article>
                    <article className="card">
                        <img src="image/Articles/fizjoterapia.jpeg" alt=""/>
                            <div className="category category-health">Health</div>
                            <h3>
                                <a href="article.html">Physiotherapy</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sunt eligendi laboriosam inventore accusamus in?</p>
                    </article>
                    <article className="card">
                        <img src="image/Articles/wedzidło.jpeg" alt=""/>
                            <div className="category category-equipment">Equipment</div>
                            <h3>
                                <a href="article.html">Bit</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?</p>
                    </article>
                    <article className="card bg-primary">
                        <div className="category category-nutrion">Nutrion</div>
                        <h3>
                            <a href="article.html"> Horse nutrion- oat </a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?</p>
                    </article>
                    <article className="card">
                        <div>
                            <div className="category category-health">Health</div>
                            <h3>
                                <a href="article.html">Horse care</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic vero vel ipsam rerum. Quisquam quia labore laborum autem. Aliquid?</p>
                        </div>
                        <img src="image/Articles/pielęgnacja.jpeg" alt=""/>
                    </article>
                </div>
            </div>
         </section>
    )
}