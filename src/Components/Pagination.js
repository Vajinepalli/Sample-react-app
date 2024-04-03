//import "./App.css";
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function Pagination() {
  const [users] = useState(JsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h4>{user.id}</h4>
          <h4>{user.title}</h4>
          <h4>{user.body}</h4>
          <span> <h4 ><a href={ '/post/comments/'+user.id }>Comments</a></h4></span>
          
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Pagination;