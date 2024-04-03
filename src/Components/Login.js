import React, { Component } from 'react';

export default class Login extends Component {

state = {
  items: window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [],
    user: '',
    rememberMe: false,
    password:'',
    mail:''
  };

 
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = () => {
      const { password,emailid} = this.state;
     
     
     
      
      // var pass=localStorage.getItem('password');
      // var mailid=localStorage.getItem('emailid');
      


const newItem = {
     
     
      emailid:this.state.emailid,
      password:this.state.password,
}; 
    const updatedItems = [...this.state.items, newItem];

    // Save items while changing
    window.localStorage.getItem('items', JSON.stringify(updatedItems));

this.setState({
       items: updatedItems,
      emailid:this.state.emailid,
      password:this.state.password,
     
    });


     
        if( this.state.items[19].emailid===emailid &&this.state.items[19].password ===password){
          
           sessionStorage.setItem('password', password? password: '');
           sessionStorage.setItem('emailid', emailid? emailid: '');
           console.log('Login successful');
          this.props.history.push('./profile');
          
             
       
      } else {
          console.log('Not a registered user');
         alert("Invalid Username or Password");
        
      }
     

  }
 
  render() { 
      
      
          return (
           
            <form onSubmit={this.handleFormSubmit} class ="was-validated container">
                 <div className="App">
                  <h1>Login Page</h1>
             </div>
             <div className="form-group">
                
                <label>
                   Username </label> 
                  <input type="email" name="emailid"className="form-control" value={this.state.emailid} placeholder="Enter Your Mail"onChange={this.handleChange}required/>
               
                </div>
                <div className="form-group">
                <label>
                  Password
                  </label> <input type="password" className="form-control" name="password" value={this.state.password} placeholder="Enter Password" onChange={this.handleChange} required/>
              
                </div>
              {/* <label>
                <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
              </label> */}
              <button type="submit" className="btn btn-dark"> Login</button>
              <div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="./register">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="./login">Forgot your password?</a>
				</div>
			</div>
            </form>
          );
        }
  }




