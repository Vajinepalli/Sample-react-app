import  Register from './Components/Register';
import Login from './Components/Login';
import Nav from './Components/Nav';
import './Components/App.css';
import Pagination from './Components/Pagination'
import Profile from './Components/Profile';
import Post from './Components/Post';
import Comments from './Components/Comments';

import React from 'react';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





export default function App() {

  
 
  // var setFlag;

  // var password=localStorage.getItem('password');
  // var emailid=localStorage.getItem('emailid');
 
  // var pass1=sessionStorage.getItem('password');
  // var mail1=sessionStorage.getItem('emailid');
  // if(mail1===emailid &&pass1===password)
  // {
  //   setFlag=true;
   
  // }
  // else{
  //   setFlag=false;
   
  // }



  
 // 
  return (
   
     <Router>
        <Nav/>
    <div className="App">
      
    <div className="inner">
 
    
     <Switch>
    
     
    
     <Route path ="/" exact component={Home}/>
     
    
    
     
    
     <Route path="/register"  component={Register}  />

     <Route path="/login" component={Login}/>
   
     <Route path="/profile" component={ Profile}/>
     
     <Route path="/post/comments/:id"  component={Comments} />
     <Route path="/post"  component={Post} />
     <Route path="/pagination"  component={Pagination} />
    
 


     
 
     
     </Switch>
  
    
     </div>
    
    
  
    </div>
  
   
    </Router>



  


    
  );
}





const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

















