import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect} from 'react-redux'
import { editCustomer } from '../../action/postAction'

class EditCustomer extends Component {

    constructor(){
        super()
        this.state = {
                    id:"",
                    Firstname:"",
                    Lastname:"",
                    Email:"",
                    Password:"",
                    Confirm_Password:"",

        }
            this.formChange = this.formChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
   
    }

    componentWillMount(){
      this.props.editCustomer();
      this.getCustomerByID();
    }

    getCustomerByID(){
    let eid = this.props.match.params.id;
      console.log("the id is", eid);
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
            Firstname: this.state.Firstname,
            Lastname:this.state.Lastname,
            Email: this.state.Email,
            Password:this.state.Password,
            Confirm_Password: this.state.Confirm_Password
        }
        console.log(data);
        this.props.editCustomer(data)
     
      console.log("Data inserted")
    }

   
    render() {

    

        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center"> Edit Customer</h1>
                  <p className="lead text-center">
                   
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>

                  <div className="form-group">
                      <input
                        type="text"
                        className={('form-control form-control-lg')}
                        placeholder="Firstname"
                        name="Firstname"
                        value={this.state.Firstname}
                        onChange={this.formChange}
                      />
                      
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={('form-control form-control-lg')}
                        placeholder="Lastname"
                        name="Lastname"
                        value={this.state.Lastname}
                        onChange={this.formChange}
                      />
                      
                    </div>
                 
                    <div className="form-group">
                      <input
                        type="email"
                        className={('form-control form-control-lg')}
                        placeholder="Email Address"
                        name="Email"
                        value={this.state.Email}
                        onChange={this.formChange}
                      />
                      
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={('form-control form-control-lg')}
                        placeholder="Password"
                        name="Password"
                        value={this.state.Password}
                        onChange={this.formChange}
                      />
                
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={('form-control form-control-lg')}
                        placeholder="Confirm Password"
                        name="Confirm_Password"
                        value={this.state.Confirm_Password}
                        onChange={this.formChange}
                      />
                    </div>
                    

                    <input type="submit" className="btn btn-info btn-block mt-4" value="Update Customer"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

EditCustomer.propTypes = {
  registerCustomer: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  posts: state.posts.value
})

export default connect(mapStateToProps, {editCustomer}) (EditCustomer)