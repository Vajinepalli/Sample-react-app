  import React, { Component } from 'react';

  export default class Register extends Component {
    constructor() {
      super();
      this.state = {
         items: window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [],
        username: '',
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

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      };
      
      handleChange(e) {

      const input = e.target;
          const value = input.type === 'checkbox' ? input.checked : input.value;
      
          this.setState({ [input.name]: value });
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});

      if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
        fields["empid"] = "";
        fields["salary"] = "";
        fields["city"] = "";
        //this.setState({fields:fields});
        // alert("Form submitted");
        // this.props.history.push('./login');
    }


    }

  submituserRegistrationForm(e) {
    e.preventDefault();

    const  { username ,password,empid,emailid,salary,mobileno,city} = this.state;

      console.log(emailid,mobileno,password);

      localStorage.setItem('password', password? password: '');
      localStorage.setItem('empid', empid? empid: '');
      localStorage.setItem('username', username? username: '');
      localStorage.setItem('emailid', emailid? emailid: '');
      //localStorage.setItem('profession', profession? profession: '');
      localStorage.setItem('salary', salary? salary: '');
      localStorage.setItem('mobileno', mobileno? mobileno: '');
      localStorage.setItem('city', city? city: '');

      //  var details =[{username:username,emailid:emailid,password:password,empid:empid,salary:salary,mobileno:mobileno,city:city}];
      //  localStorage.setItem('Details',JSON.stringify(details));
      //  var Details =JSON.parse(localStorage.getItem('itemArray'))||[];

      //  var newItem=
      //  {
      //    username :details.find('Details.username').text(),
      //    emailid :details.find('Details.emailid').text()
      //  };
      //  details.push(newItem);
      //  localStorage.setItem('itemArray',JSON.stringify(details));




  const newItem = {
      id: this.state.id,
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
    window.localStorage.setItem('items', JSON.stringify(updatedItems));

    this.setState({
      items: updatedItems,
      item: "username",
      emailid: "emailid",
      
      //editItem: false
    });
  



    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
        fields["empid"] = "";
        fields["salary"] = "";
        fields["city"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
        this.props.history.push('./login');
    }

  }


      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/ )  ) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
          console.log(this.state.username.length);
          if(fields["username"].charAt(0)===' '){
            formIsValid = false;
            errors["username"] = "*Name cannot be empty.";
          }
    
          
        }
      
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }

        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }

        if (!fields["empid"]) {
          formIsValid = false;
          errors["empid"] = "*Please enter your empid no.";
        }

        if (typeof fields["empid"] !== "undefined") {
          if (!fields["empid"].match(/[0-9]/)) {
            formIsValid = false;
            errors["empid"] = "*Please enter valid empid no.";
          }
        }


        if (!fields["city"]) {
          formIsValid = false;
          errors["city"] = "*Please enter your city.";
        }

        if (typeof fields["city"] !== "undefined") {
          if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["city"] = "*Please enter valid city.";
          }
          if(fields["city"].charAt(0)===' '){
            formIsValid = false;
            errors["city"] = "*Name cannot be empty.";
          }
        }


        if (!fields["salary"]) {
          formIsValid = false;
          errors["salary"] = "*Please enter your salary.";
        }

        if (typeof fields["salary"] !== "undefined") {
          if (!fields["salary"].match(/^[0-9]*$/)) {
            formIsValid = false;
            errors["salary"] = "*Please enter valid salary.";
          }
        }

        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }

        this.setState({
          errors: errors
        });
        return formIsValid;

        }

     render() { 
          return (
         
 <div id="main-registration-container">
  <h2>Registration page</h2>
      <div id="register">
          
        
          <form method="post" style={{whiteSpace: "pre" }} name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}  >
          <div className="form-group">
          <label>Name</label>
          <input id ="username" type="text" name="username" placeholder="Enter Name" className="form-control" value={this.state.fields.username} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.username} </div>
          </div>
          <div className="form-group">
          <label>Email ID:</label>
          <input type="text" name="emailid" placeholder="Enter Email ID" className="form-control" value={this.state.fields.emailid} onChange={this.handleChange}  />
          <div className="errorMsg">{this.state.errors.emailid}</div>
          </div>
          <div className="form-group">
          <label>Mobile No:</label>
          <input type="text" name="mobileno" placeholder="Enter Mobile Number" className="form-control" value={this.state.fields.mobileno} onChange={this.handleChange}   />
          <div className="errorMsg">{this.state.errors.mobileno}</div>
          </div>
          <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Password" className="form-control"value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          </div>

          {/* <div className="form-group">
                    <label>Choose your Profession</label>
                      <select id="profession" onChange={this.handleChange} name ='profession' value={this.state.profession} required >
                      <option>Select Profession</option>
                          <option>Developer</option>
                          <option>Artist</option>
                          <option>Photographer</option>
                          <option>Team Player</option>
                          <option>Full Stack</option>
                          <option>HR</option>
                          <option>TL</option>
                    </select>
                  </div> */}

                  <div className="form-group">
                  <label>
                    Employee Id
                    </label> <input type="text" name="empid" className="form-control" placeholder="Enter Employee Id" value={this.state.empid} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.empid}</div>
                  </div>

                  <div className="form-group">
              <label>
                    Salary</label>
                      <input type="text"className="form-control" name="salary" value={this.state.salary} placeholder="Enter Salary"onChange={this.handleChange}/>
                      <div className="errorMsg">{this.state.errors.salary}</div>
                </div>
                  

          <div className="form-group">
                  
                  <label>
                  City      </label>
                <input type="text" name="city"className="form-control" value={this.state.city} placeholder="Enter City"onChange={this.handleChange}/>
                <div className="errorMsg">{this.state.errors.city}</div>
                </div>



          <input type="submit" className="button"  value="Register"/>

          
                
                <p className="forgot-password text-right">
                      Already Registered <a href="/login" >Login?</a>
                </p>

              
          </form>
      </div>
  </div>
              );
            }
      }
    






