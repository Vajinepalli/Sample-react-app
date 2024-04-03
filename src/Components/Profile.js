import React ,{Component} from 'react';


 export default class Profile extends Component {
    constructor() {
      super();
      this.state = {
         items: window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [],
        username: {},
        password:'',
        empid:'',
        emailid:'',
        //profession:'',
        salary:'',
        mobileno:'',
        city:'',
        fields: {},
        errors: {}
      };




    const newItem = {
      
      username: this.state.username,
      emailid:this.state.emailid,
      password:this.state.password,
      empid:this.state.empid,
      mobileno:this.state.mobileno,
      salary:this.state.salary,
      city:this.state.city
    };
    const updatedItems = [...this.state.items, newItem];

    // Save items while changing
    window.localStorage.getItem('items', JSON.stringify(updatedItems));

    this.setState({
      items: updatedItems,
       username: this.state.username,
      emailid:this.state.emailid,
      password:this.state.password,
      empid:this.state.empid,
      mobileno:this.state.mobileno,
      salary:this.state.salary,
      city:this.state.city
    });
    console.log(updatedItems[6]);
    

    }
    


render(){
    
    function clear() {
  
        sessionStorage.removeItem('password');
    
        sessionStorage.removeItem('emailid');
}
    return (
      
        <form class ="was-validated container" >
      
      <div>
              
        <h2>Welcome  <span>{this.state.items[6].username}</span></h2>
        <h3>Your Details</h3>
       <div class="center"> 
        <table >
            <tr>
            <th>Name</th>
            <th>EMail</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Employee Id</th>
            <th>Salary</th>
            {/* <th>Profession</th> */}
            <th>City</th>
            </tr>
            <tr>
                <td>{this.state.items[6].username}</td>
                <td>{this.state.items[6].emailid}</td>
                <td>{this.state.items[6].password}</td>
                <td>{this.state.items[6].mobileno}</td>
                <td>{this.state.items[6].empid}</td>
                <td>{this.state.items[6].salary}</td> 
                
                 {/* <td>{a7}</td> */}
                <td>{this.state.items[6].city}</td>

            </tr>

        </table>
        {/* <div>{this.state.items[6].username}</div> */}
       
        </div>
        <div className="logout">
        <a href='./login' onClick={clear}>Logout</a>
        </div>

      
        
        </div>
</form>



    
    );
    }
}

    