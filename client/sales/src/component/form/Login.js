import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            Email:"",
            Password:"",
        }
        this.onChange =this.onChange.bind(this)
    }

    onChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    onSubmit(event){
            event.preventDefault();
            
            const loginData = {
                Email: this.state.Email
            }
            console.log("login details are", loginData);
            
    }
    render() {
        return (
           
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Create Your Free Account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.onChange}
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
export default Login
