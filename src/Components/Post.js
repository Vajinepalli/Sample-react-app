import React from "react";
//import DropdownButton from 'react-bootstrap/DropdownButton'
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import Pagination from "react-js-pagination";
//import ReactPaginate from 'react-paginate';
//  require("bootstrap/less/bootstrap.less");

//import { Redirect } from "react-router";
//import { DropDownList } from '@progress/kendo-react-dropdowns';
//import InfiniteScroll from 'react-infinite-scroll-component';


export default class Post extends React.Component {



  constructor(props) {
    super(props);

   this.state = {
    loading: true,
    people: [],
    items: 20,
    userId:'',
    userslist: [1,2,3,4,5,6,7,8,9,10],
    count: 10,
    // activePage: 15,

    // users : '',
    // pageNumber: '',
    // usersPerPage : 10,
    // pagesVisited :'',
    // setPageNumber:0
    
    
  };

 
  
  
  
 
  // document.body.style.width = "100%";
  // document.body.style.height = "100%";
  // document.body.style.overflow = "hidden";
 }
//  handlePageChange(pageNumber) {
//   console.log(`active page is ${pageNumber}`);
//   this.setState({activePage: pageNumber});
// }
  
  




  async componentDidMount() {
  
    
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

    var url = "https://jsonplaceholder.typicode.com/posts/" ;
    const response = await fetch(url);
    var data = await response.json();
    var result = data.filter((x)=>{
    return x.userId===parseInt(lastURLSegment)});
    if(lastURLSegment!=='post'){
       result = result.slice(0, this.state.count);
      this.setState({userId:lastURLSegment});
    this.setState({ people: result, loading: false });
    }else{
      data = data.slice(0,  this.state.count);
      this.setState({ people: data, loading: false });
    }
    

  //  this.state.people = data.slice(0, 100);
  //  this.state.pageNumber= 0;
  //   this.state.usersPerPage = 10;
  //   this.state.pagesVisited = this.pageNumber * this.usersPerPage;
    
  



  //  this.state.displayUsers = data.slice(this.pagesVisited, this.pagesVisited + this.usersPerPage)

  //   .map((user) => {
  //     return (
  //       <div className="user">
  //         <h3>{user.id}</h3>
  //         <h3>{user.title}</h3>
  //         <h3>{user.body}</h3>
  //       </div>
  //     );
  //   });


    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.setState({count:this.state.count+10});
        this.loadMore();
      }
    });
 
}








  // Detect when scrolled to bottom.



showItems() {
  var items = [];
  for (var i = 0; i < this.state.items; i++) {
    items.push(<li key={i}>Item {i}</li>);
  }
  return items;
}

async loadMore() {
  
  var pageURL = window.location.href;
  var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

  var url = "https://jsonplaceholder.typicode.com/posts/" ;
  const response = await fetch(url);
  var data = await response.json();
  var result = data.filter((x)=>{
  return x.userId===parseInt(lastURLSegment)});
  if(lastURLSegment!=='post'){
     result = result.slice(0, this.state.count);
    this.setState({userId:lastURLSegment});
  this.setState({ people: result, loading: true });
  }else{
    data = data.slice(0,  this.state.count);
    this.setState({ people: data, loading: true });
  }
  }



  render() {

    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }
    // if (!this.state.people.length) {
    //   return <div>didn't get a person</div>;
    // }
    
    // this.pageCount = Math.ceil(this.state.people.length / this.state.usersPerPage);

    // this.changePage = ({ selected }) => {
    //  this.setPageNumber(selected);
    // };
   
    return (
      
      <div>


      <div id="header"   className="App"
      ref="myscroll"
      style={{ height: "420px", overflow: "auto" }}>
       
       
        

        
     

          <ul>
        <h2>User Data</h2>
        {/* <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div> */}
       {/* <select onChange={this.handleChange}  value={this.state.userId} >
                        <option >Select User</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option  value="3">3</option>
                        <option  value="4">4</option>
                        <option  value="5">5</option>
                        <option  value="6">6</option>
                        <option  value="7">7</option>
                        <option  value="8">8</option>
                        <option  value="9">9</option>
                        <option  value="10">10</option>
                  </select> */}


                  <div
          
          >
            {/* <header className="App-header">
             
              <h1 className="App-title">Welcome to React</h1>
            </header> */}
          
              {/* {this.showItems()} */}
              {this.state.people.map(person => (
          <div  className="border">
             <div>
               {/* <h3>User_Id</h3> <h4 ><a href={ '/post/comments/'+person.id }> {person.id}</a></h4> */}
           <h4>Id</h4> {person.id}
           <h4>Title</h4> {person.title}
            <h4>Post</h4>{person.body}
            <span> <h4 ><a href={ '/post/comments/'+person.id }>Comments</a></h4></span>
            </div>
            
          </div>
        ))}
            {this.state.loading
              ? <p className="App-intro">
                  {/* loading ... */}
                </p>
              : ""}
    
          </div>
        {/* {this.state.people.map(person => (
          <div  className="border">
               <div><h3>User_Id</h3> <h4 ><a href={ '/post/comments/'+person.userId }> {person.userId}</a></h4>
           <h4>Id</h4> {person.id}
           <h4>Title</h4> {person.title}
            <h4>Post</h4>{person.body}
            <span> <h4 ><a href={ '/post/comments/'+person.userId }>Comments</a></h4></span>
            </div>
            
          </div>
        ))} */}


            
</ul>

<div>Loading...</div>
      </div>
      {/* <div>
      {this.state.displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={this.state.pageCount}
        onPageChange={this.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div> */}
      </div>
    );
  }
}





