import { useParams } from "react-router-dom";
import "../article.css";
import useSWR from "swr";
import MainNavbarTW from "../components/MainNavbarTW";

export default function Article() {
  let { id } = useParams();

  const fetcher = (...args) =>
    fetch(...args).then((res) => {
      const data = res.json();
      return data;
    });
  const { data: article, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  const { data: user, error: error2 } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${article?.userId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!article) return <div>loading...</div>;

  if (error2) return <div>failed to load</div>;
  if (!user) return <div>loading...</div>;

  console.log(article);

  return (
    <>
      <MainNavbarTW />
      <section id="article">
        <div className="container">
          <div className="page-container">
            <article className="card-free article">
              <img src="/image/Articles/magnetoterapia.jpeg" alt="" />
              <h1 className="l-heading">{article.title}.</h1>
              {{ user } && (
                <div className="meta">
                  {/* <div className="category category-health">Health</div> */}
                  <div className="small">
                    <i className="fa fa-user"></i> Written by {user.name}
                  </div>
                </div>
              )}
              <p>{article.body}</p>
            </article>
            <aside id="categories" className="card">
              <h2>Categories</h2>
              <ul className="list">
                <li>
                  <a href="#">
                    <i className="fa fa-chevron-right"></i>Nutrion
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-chevron-right"></i>Health
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-chevron-right"></i>Equipment
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-chevron-right"></i>Events in the stable
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="card-free bg-secondary">
              <h3>Join to us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, inventore iste molestiae atque modi nostrum.
              </p>
              <input type="submit" className="btn btn-dark" />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
