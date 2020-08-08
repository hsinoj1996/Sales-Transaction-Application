import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect} from 'react-redux'
import {Link} from "react-router-dom"
import { addProduct } from '../../../action/prodAction'

class ProductRegister extends Component {

    constructor(){
        super()
        this.state = {
                    Name:"",
                    Price:"",
                    Description:"",
                    showName: false
                   

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
            Name: this.state.Name,
            Price:this.state.Price,
            Description: this.state.Description,
           
        }
      
       
        this.props.addProduct(data)
     
      console.log("Data inserted", "data")
    }

    render() {

    

        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center"> Add Product</h1>
                  <p className="lead text-center">
                   
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>

                  <div className="form-group">
                      <input
                        type="text"
                        className={('form-control form-control-lg')}
                        placeholder="Name of Product"
                        name="Name"
                        value={this.state.Name}
                        onChange={this.formChange}
                      />
                      
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={('form-control form-control-lg')}
                        placeholder="Price of Product"
                        name="Price"
                        value={this.state.Price}
                        onChange={this.formChange}
                      />
                      
                    </div>
                 
                    <div className="form-group">
                      <input
                        type="email"
                        className={('form-control form-control-lg')}
                        placeholder="Description of Product"
                        name="Description"
                        value={this.state.Description}
                        onChange={this.formChange}
                      />
                      
                    </div>

                    <div className="form-group">
                    
                    
                    <Link to = "/api/product/view"><button>Add</button></Link>
                    <input type="submit" 
                                className="btn btn-info btn-block mt-4" 
                                value="Add Product"
                                />
                    
                    </div>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

ProductRegister.propTypes = {
  registerProduct: PropTypes.func.isRequired,
  prods: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  posts: state.prods.value
})

export default connect(mapStateToProps, {addProduct}) (ProductRegister)
