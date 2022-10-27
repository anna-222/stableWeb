import { Link } from "react-router-dom"
import "../homeArticles.css"
import "../allArticles.css"
import useSWR from 'swr'
export default function AllArticles() {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const {data, error} = useSWR("https://jsonplaceholder.typicode.com/posts",fetcher)
    console.log(data);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return(
        <section id="home-articles" className="py-2">
            <div className="container">
                <h2>Edytor Picks</h2>
                <div className="articles-container2">
                {data.map(article => {
                    return (
                        <article className="card">
                            <img src="image/Articles/magnetoterapia.jpeg" alt=""/>
                            <div category category-health>Category</div>
                            <h3>
                                <Link to="/article">{article.title}</Link>       
                            </h3>
                            <p>{article.body}</p>
                        </article>
                    )})
        }
                </div>
            </div>
         </section>
    )
}