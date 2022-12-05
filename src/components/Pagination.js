import React from "react";
import "../pagination.css";
import { useState, useEffect } from "react";

function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const [oldPage, setOldPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [number, setNumber] = useState(1);
  // console.log('postPerPage:',postPerPage,'totalPosts',totalPosts)

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log("page", pageNumbers);

  useEffect(() => {
    const oldPageNumber = document.querySelector(".activePage");
    if (oldPageNumber) {
      console.log(oldPageNumber);
      oldPageNumber.classList.remove("activePage");
    }

    const page = document.getElementById(`${number}`);
    if (page) {
      page.classList.add("activePage");
    }
  }, [currentPage]);

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li className="page" key={number}>
              <a
                id={number}
                onClick={() => {
                  paginate(number);
                  setNumber(number);
                  setCurrentPage(number);
                }}
                href="#"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
