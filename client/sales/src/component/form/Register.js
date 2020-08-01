import React, { Component } from 'react'

class Register extends Component {

    constructor(){
        super()
        this.state = {
                    Firstname:"",
                    Lastname:"",
                    email:"",
                    password:"",
                    confirm_password:"",

        }
            this.formChange = this.formChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
   
    }
    formChange(event){
        const {name, value} = event.target
        this.setState({
          [name]:value
      })
    }
    onSubmit(event){
        event.preventDefault();
        const data = {
            firstname: this.state.firstname,
            lastname:this.state.lastname,
            email: this.state.email
        }
        console.log(data);
        
    }

    render() {
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">
                    Create Your Account
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>

                  <div className="form-group">
                      <input
                        type="text"
                        className={('form-control form-control-lg')}
                        placeholder="Firstname"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.formChange}
                      />
                      
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={('form-control form-control-lg')}
                        placeholder="Lastname"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.formChange}
                      />
                      
                    </div>
                 
                    <div className="form-group">
                      <input
                        type="email"
                        className={('form-control form-control-lg')}
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.formChange}
                      />
                      
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={('form-control form-control-lg')}
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.formChange}
                      />
                
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={('form-control form-control-lg')}
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value={this.state.confirm_password}
                        onChange={this.formChange}
                      />
                    </div>
                    

                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Register
