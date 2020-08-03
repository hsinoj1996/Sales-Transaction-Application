import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCustomer } from "../../action/postAction"

class ViewCustomer extends Component {

    componentWillMount(){
        this.props.getCustomer();
    }


    render() {

        console.log("details",this.props.posts);
        const customerItems = this.props.posts.map(view =>(
            
          <li key= {view._id}>
           <table>
               <tr>
                   <th>Firstname</th>
                   <th>Lastname</th>
                   <th>Email</th>
               </tr>
               <tr>
                   <td>{view.Firstname}</td>
                   <td>{view.Lastname}</td>
                   <td>{view.Emal}</td>
               </tr>
           </table>
                     
          
            </li>
        ))

        return (
            <div>
             <h1>Customer List</h1>
             {customerItems}
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
