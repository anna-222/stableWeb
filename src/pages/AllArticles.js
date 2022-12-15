import { useState } from "react";
import Posts from "../components/Posts";
import MainNavbarTW from "../components/MainNavbarTW";
import "../homeArticles.css";
import "../allArticles.css";
import useSWR from "swr";
import Pagination from "../components/Pagination";
export default function AllArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  const [totalPosts, setTotalPosts] = useState(0);

  const fetcher = (...args) =>
    fetch(...args).then((res) => {
      const data = res.json().then((posts) => {
        setTotalPosts(posts.length);
        return posts;
      });

      return data;
    });
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  // console.log("data",data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // Get current page

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //changePage
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <MainNavbarTW />
      <section id="home-articles" className="py-2">
        <div className="container">
          <div className="articles-container2">
            <Posts data={currentPosts} />
          </div>

          <Pagination
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  );
}
