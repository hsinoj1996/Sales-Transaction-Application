import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import { getCustomer } from "../../action/postAction"

class ViewCustomer extends Component {

    componentWillMount(){
        this.props.getCustomer();
    }


    render() {
        const customerItems = this.props.posts.map(view =>(
                        <tr key= {view._id}>
                        <td>{view.Firstname}</td>
                        <td>{view.Lastname}</td>
                        <td>{view.Email}</td>
                        <td>
                        <Link className = "btn btn-primary mr-2" to={`/api/edit/${view.id}`}>Edit</Link>
                        <Link className = "btn btn-primary mr-2">Delete</Link>
                           
                        </td>
                        </tr>
            ))
               
  
   return(
       
    //grid view

    <div className ="container">
        <div className ="row">
        <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        
                        <th className="col-sm-3">Firstname</th>
                        <th className="col-sm-3">Lastname</th>
                        <th className="col-sm-3">Email</th>
                        <th className="col-sm-3">Action</th>
                        </tr>
                    </thead>
                <tbody>
             {customerItems}
             </tbody>
             </table>
        </div>
    </div>
       
   )
   

        
    }
}

ViewCustomer.propTypes = {
    getCustomer: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
}

const mapStoreToProps = state => ({
    posts: state.posts.values
})
export default connect(mapStoreToProps, {getCustomer}) (ViewCustomer)
