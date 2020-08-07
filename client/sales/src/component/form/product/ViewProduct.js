import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { getProduct } from "../../../action/prodAction"


class ViewProduct extends Component {

    componentWillMount(){
        this.props.getProduct();
    }

    render() {

        console.log(this.props.prods, "this is the details of product");
        const productItems = this.props.prods.map(view => (
            <tr key = {view._id}>
                <td>{view.Name}</td>
                <td>{view.Price}</td>
                <td>{view.Description}</td>
            </tr>
        ))
        return (
            <div className ="container">
            <div className ="row">
            <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            
                            <th className="col-sm-3">Name</th>
                            <th className="col-sm-3">Price</th>
                            <th className="col-sm-3">Description</th>
                            
                            </tr>
                        </thead>
                    <tbody>
                 {productItems}
                 </tbody>
                 </table>
            </div>
        </div>
        )
    }
}

ViewProduct.propTypes = {
    getProduct: PropTypes.func.isRequired,
    prods: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    prods: state.prods.values
})
export default connect (mapStateToProps, {getProduct})(ViewProduct)
