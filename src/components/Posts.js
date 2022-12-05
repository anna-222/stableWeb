import React from "react";
import { Link } from "react-router-dom";

function Posts({ data }) {
  console.log(data);
  return (
    <>
      {data.map((article) => {
        return (
          <article key={article.id} className="card">
            <img src="image/Articles/magnetoterapia.jpeg" alt="" />
            {/* <div category category-health>
              Category
            </div> */}
            <h3>
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </h3>
            <p>{article.body}</p>
          </article>
        );
      })}
    </>
  );
}

export default Posts;
