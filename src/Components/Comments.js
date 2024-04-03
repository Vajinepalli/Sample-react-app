import React from "react";

export default class Comments extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    const url = "https://jsonplaceholder.typicode.com/comments/" ;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    var result = data.filter((x)=>{
      return x.postId===parseInt(lastURLSegment)});
    this.setState({ people: result, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

   
    return (
      <div>
        <h4>Comments</h4>
        {this.state.people.map(person => (
          <div className="border">
             <div>
               {/* <h3>Post_Id</h3> <h4><a href='/id'> {person.postId}</a></h4> */}
           {/* <h4>Id</h4> {person.id} */}
           <span style={{paddingBottom:"100px"}}>
            {person.body}
            </span>
<br/>
<br/>
         <span>  <p  style={{fontSize:"15px"}}><b>By:</b> {person.name}</p> </span>
         <span> <p style={{fontSize:"15px"}}><b>Email:</b> {person.email}</p> </span> 
            </div>
            
          </div>
        ))}
      </div>
    );
  }
}



