import "../article.css"
import MainNavbar from "../MainNavbar"

export default function Article() {
    return(
        <>
        
        <section id="article">
            <div className="container">
                <div className="page-container">
                    <article className="card-free article">
                        <img src="/image/Articles/magnetoterapia.jpeg" alt=""/>
                        <h1 className="l-heading">Lorem ipsum dolor sit amet.
                        </h1>
                        <div className="meta">
                            <div className="category category-health">Health</div>
                            <div className="small">
                                <i className="fa fa-user"></i>  Written by Amy Nowacki 12 Maj 2020
                        </div>
                        
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores ullam quisquam accusamus doloremque, odio nobis, porro dicta natus est doloribus veniam quaerat voluptatum nihil corrupti assumenda error mollitia nesciunt eum expedita eos excepturi modi. Eligendi, officiis eveniet! Laboriosam enim nesciunt, obcaecati esse, aliquam consequuntur quae ab veniam dicta praesentium velit adipisci neque maiores dolorum eius nulla, voluptatem ipsa earum beatae vero ducimus repellendus deserunt natus! Voluptatum repellendus molestiae laudantium corporis sunt maiores, nesciunt dolores. Ducimus laboriosam sed nemo corrupti!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cumque laboriosam aut? Amet magnam voluptates pariatur nobis totam repellendus, veritatis beatae neque consequatur ex quisquam, optio repudiandae earum voluptatibus natus ea tempore assumenda accusamus is eius voluptatem iste, temporibus modi doloribus. Voluptatem libero laboriosam culpa officia assumenda eum nulla amet excepturi omnis magni architecto quisquam eveniet incidunt, esse ex totam, molestiae cupiditate, veniam iure impedit asperiores earum! Quam quis nesciunt commodi quae, ipsam reiciendis quisquam omnis unde quidem explicabo possimus odit, mollitia rerum debitis laborum autem quas eius id 
                        </p>
                    </article>
                    <aside id="categories" className="card">
                        <h2>Categories</h2>
                        <ul className="list">
                            <li><a href="#"><i className="fa fa-chevron-right"></i>Nutrion</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right"></i>Health</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right"></i>Equipment</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right"></i>Events in the stable</a></li>
                        </ul>
                    </aside>
                    <aside className="card-free bg-secondary">
                        <h3>Join to us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, inventore iste molestiae atque modi nostrum.</p>
                        <input type="submit" className="btn btn-dark"/>
                    </aside>
                </div>
            </div>
         </section>
        </>
    )
}